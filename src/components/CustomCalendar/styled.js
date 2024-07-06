import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
    margin: 20px auto; 
    max-width: 1200px; /* максимальная ширина */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1280px) {
        max-width: 90%;
    }
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

    @media (min-width: 1280px) {
        margin-bottom: 20px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 30px;
    }
`;

export const NavigationButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
        color: #007bff;
    }

    @media (min-width: 1280px) {
        font-size: 2rem;
    }

    @media (min-width: 1440px) {
        font-size: 2.5rem;
    }
`;

export const MonthDisplay = styled.div`
    font-size: 1.2rem;
    font-weight: bold;

    @media (min-width: 1280px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1440px) {
        font-size: 1.8rem;
    }
`;
