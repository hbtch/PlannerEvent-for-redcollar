import React, { useState } from 'react';
import { Header, Logo, H1, Span, StyledCalendarPage } from './styled';
import CustomCalendar  from '../../components/CustomCalendar';


const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const handleDateClick = (date) => {
    setSelectedDate(date)
};
    const formatDate = (date) => {
    return date.toISOString().split('T')[0];
};
const filteredEvents = events.filter((event) => event.date === formatDate(selectedDate));

    return (
    <div>
        <Header>
        <Logo src="/logo-redcollar.svg" alt="Логотип RedCollar" className="logo"/>
        <H1>
            <Span color="black">planner </Span>
            <Span color="red">event</Span>
        </H1>
        </Header>
    <StyledCalendarPage>
        <CustomCalendar />
    </StyledCalendarPage>
    </div>
    );
};
export default CalendarPage