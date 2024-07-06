import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './styled';

const CustomModal = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;
