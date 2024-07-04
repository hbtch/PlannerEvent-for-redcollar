import React from 'react';
import moment from 'moment';
import { NavigationContainer, NavigationButton, MonthDisplay } from './styled';

const CalendarNavigation = ({ currentDate, onPrevMonth, onNextMonth }) => {
    const currentMonth = moment(currentDate).format('MMMM');
    const currentYear = moment(currentDate).format('YYYY');

    return (
        <NavigationContainer>
            <NavigationButton onClick={onPrevMonth}>{'<'}</NavigationButton>
            <MonthDisplay>{`${currentMonth} ${currentYear}`}</MonthDisplay>
            <NavigationButton onClick={onNextMonth}>{'>'}</NavigationButton>
        </NavigationContainer>
    );
};

export default CalendarNavigation;