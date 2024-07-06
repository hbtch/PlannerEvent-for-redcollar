import React, { useState } from 'react';
import { Header, Logo, H1, Span, StyledCalendarPage, HeaderLeft, NavigationWrapper, LoginButton } from './styled';
import CustomCalendar from '../../components/CustomCalendar';
import CalendarNavigation from '../../components/CalendarNavigation/CalendarNavigation';
import AuthModal from '../../components/AuthModal';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([
        // Пример событий
        { title: 'Музыкальный опен-эйр', start: new Date(2024, 6, 5, 10, 0), end: new Date(2024, 6, 5, 11, 0), isCurrentUserParticipant: true },
        { title: 'Небофест', start: new Date(2024, 6, 6, 12, 0), end: new Date(2024, 6, 6, 13, 0), isCurrentUserParticipant: false },
        { title: 'Рыцарский турнир', start: new Date(2024, 6, 7, 18, 0), end: new Date(2024, 6, 7, 19, 0), isCurrentUserParticipant: true },
    ]);
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false); // Состояние для управления модальным окном
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const filteredEvents = events
        .filter(event => formatDate(event.start) === formatDate(selectedDate))
        .sort((a, b) => a.start - b.start);

    return (
        <div>
            <Header>
                <HeaderLeft>
                    <Logo src="/PlannerEvent-for-redcollar/logo-redcollar.svg" alt="Логотип RedCollar" className="logo" />
                    <H1>
                        <Span color="black">planner </Span>
                        <Span color="red">event</Span>
                    </H1>
                </HeaderLeft>
                <NavigationWrapper>
                    <CalendarNavigation
                        currentDate={selectedDate}
                        onPrevMonth={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
                        onNextMonth={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
                    />
                    <LoginButton onClick={() => setIsAuthModalVisible(true)}>Войти</LoginButton> {}
                </NavigationWrapper>
            </Header>
            <StyledCalendarPage>
                <CustomCalendar 
                    selectedDate={selectedDate}
                    events={events} // Передаем все события в календарь
                    onDateClick={handleDateClick}
                />
            </StyledCalendarPage>
            <AuthModal
                visible={isAuthModalVisible}
                onClose={() => setIsAuthModalVisible(false)} // Закрытие модального окна
            />
        </div>
    );
};

export default CalendarPage;
