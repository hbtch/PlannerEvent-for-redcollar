import React, { useState } from 'react';
import CustomModal from '../CustomModal/CustomModal';
import { ModalInput, ModalButton, ModalError } from './styled';

const AuthModal = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState('email'); 
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,32}$/;
    return passwordRegex.test(password);
  };

  const handleEmailSubmit = async () => {
    if (!validateEmail(email)) {
      setError('Введите валидный email');
      return;
    }
    
    // Проверка наличия пользователя по email
    try {
      const response = await fetch(`/api/check-user?email=${email}`);
      if (response.status === 200) {
        const userExists = await response.json();
        if (userExists) {
          setStep('password');
        } else {
          setStep('registration');
        }
        setError('');
      } else {
        setError('Что-то пошло не так, попробуйте позже');
      }
    } catch (error) {
      setError('Что-то пошло не так, попробуйте позже');
    }
  };

  const handlePasswordSubmit = () => {
    if (!password) {
      setError('Обязательное поле');
      return;
    }
    
    // Проверка пароля пользователя
    if (password === 'correctPassword') { 
      alert('Успешный вход');
      onClose();
    } else {
      setError('Неверный пароль');
    }
  };

  const handleRegistration = async () => {
    if (!validatePassword(password)) {
      setError('Пароль должен содержать от 8 до 32 символов, включая буквы, цифры и спецсимволы');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    // Регистрация пользователя
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status >= 200 && response.status < 300) {
        alert('Регистрация успешна');
        onClose();
      } else {
        setError('Что-то пошло не так, попробуйте позже');
      }
    } catch (error) {
      setError('Что-то пошло не так, попробуйте позже');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderContent = () => {
    switch (step) {
      case 'email':
        return (
          <>
            <h2>Введите ваш email</h2>
            <ModalInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <ModalButton onClick={handleEmailSubmit}>Далее</ModalButton>
            {error && <ModalError>{error}</ModalError>}
          </>
        );
      case 'password':
        return (
          <>
            <h2>Введите ваш пароль</h2>
            <ModalInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
            <ModalButton onClick={toggleShowPassword}>
              {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            </ModalButton>
            <ModalButton onClick={handlePasswordSubmit}>Войти</ModalButton>
            {error && <ModalError>{error}</ModalError>}
          </>
        );
      case 'registration':
        return (
          <>
            <h2>Регистрация нового пользователя</h2>
            <ModalInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              readOnly
            />
            <ModalInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
            <ModalInput
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Подтвердите пароль"
            />
            <ModalButton onClick={toggleShowPassword}>
              {showPassword ? 'Скрыть пароли' : 'Показать пароли'}
            </ModalButton>
            <ModalButton onClick={handleRegistration}>Зарегистрироваться</ModalButton>
            {error && <ModalError>{error}</ModalError>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <CustomModal visible={visible} onClose={onClose}>
      {renderContent()}
    </CustomModal>
  );
};

export default AuthModal;
