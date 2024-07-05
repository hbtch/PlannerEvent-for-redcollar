import React, { useState } from 'react';
import { Header, Logo, H1, Span, StyledCalendarPage, HeaderLeft, NavigationWrapper, LoginButton } from './styled';
import CustomCalendar from '../../components/CustomCalendar';
import CalendarNavigation from '../../components/CalendarNavigation/CalendarNavigation';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const filteredEvents = events.filter((event) => event.date === formatDate(selectedDate));

    return (
        <div>
            <Header>
                <HeaderLeft>
                    <Logo src="/logo-redcollar.svg" alt="Логотип RedCollar" className="logo" />
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
                    <LoginButton>Войти</LoginButton>
                </NavigationWrapper>
            </Header>
            <StyledCalendarPage>
                <CustomCalendar 
                    selectedDate={selectedDate}
                    events={filteredEvents}
                    onDateClick={handleDateClick}
                />
            </StyledCalendarPage>
        </div>
    );
};

export default CalendarPage;
