import React, { useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarContainer } from './styled';
import CalendarNavigation from '../CalendarNavigation/CalendarNavigation';

const localizer = momentLocalizer(moment);

const CustomCalendar = () => {
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const onPrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month').toDate());
  };

  const onNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month').toDate());
  };

  return (
    <CalendarContainer>
      <CalendarNavigation
        currentDate={currentDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', width: '100%' }}
        views={['month']}
        defaultView="month"
        selectable
        popup
        toolbar={false}
        onNavigate={() => {}}
        ref={calendarRef}
        date={currentDate} // Устанавливаем текущую дату
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;