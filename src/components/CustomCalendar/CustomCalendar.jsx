import React, { useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarContainer } from './styled';

const localizer = momentLocalizer(moment);

const CustomCalendar = ({ selectedDate, events, onDateClick }) => {
  const calendarRef = useRef(null);

  return (
    <CalendarContainer>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', width: '100%' }}
        views={['month']}
        defaultView="month"
        selectable
        popup
        toolbar={false}
        date={selectedDate} // Используем переданную из CalendarPage текущую дату
        onNavigate={(date) => onDateClick(date)} 
        ref={calendarRef}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;
