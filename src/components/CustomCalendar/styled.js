import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
    margin: 20px auto; 
    max-width: 1200px; /* максимальная ширина */
    width: 100%; /* Занимаем всю доступную ширину родительского контейнера */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Calendar = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const NavigationButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    &:hover {
        color: #007bff;
    }
`;

export const MonthDisplay = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;