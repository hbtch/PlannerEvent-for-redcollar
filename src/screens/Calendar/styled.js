import styled from '@emotion/styled';

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 20px;
`;

export const Logo = styled.img`
    width: 200px;
    height: 30px;
    display: block;
`;

export const H1 = styled.h1`
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-style: bold;
    font-size: 45px;
    margin-top: 15px;
`;

export const Span = styled.span`
    font-size: 45px;
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-style: bold;
    color: ${({ color }) => color || 'black'};
`;

export const StyledCalendarPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;