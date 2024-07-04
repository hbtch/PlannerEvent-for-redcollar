import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    max-width: 1200px; /* максимальная ширина */
    width: 90%; /* ширина 90% от родительского контейнера */
`;

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const NavigationButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 5px 10px;
    &:hover {
        color: #007bff;
    }
`;

export const MonthDisplay = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 15px;
    text-align: center;
`;