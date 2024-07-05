import { NavigationContainer, MonthLabel, NavButton  } from './styled';

const CalendarNavigation = ({ currentDate, onPrevMonth, onNextMonth }) => {
    // Форматируем месяц и год
    const formatMonthYear = (date) => {
        const monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
        <NavigationContainer>
            <MonthLabel>{formatMonthYear(currentDate)}</MonthLabel>
            <NavButton onClick={onPrevMonth} direction="left" />  {/* direction для указания стрелки */}
            <NavButton onClick={onNextMonth} direction="right" /> {/* direction для указания стрелки */}
        </NavigationContainer>
    );
};


export default CalendarNavigation;