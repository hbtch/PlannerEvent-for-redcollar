import styled from '@emotion/styled';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;

    @media (min-width: 1280px) {
        padding: 20px 40px;
    }

    @media (min-width: 1440px) {
        padding: 30px 60px;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 150px;
    height: 40px;
    margin-right: 20px;

    @media (min-width: 1280px) {
        width: 200px;
        height: 50px;
    }

    @media (min-width: 1440px) {
        width: 250px;
        height: 60px;
    }
`;

export const H1 = styled.h1`
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-size: 30px;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 45px;
    }

    @media (min-width: 1440px) {
        font-size: 55px;
    }
`;

export const Span = styled.span`
    font-size: 30px;
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    color: ${props => props.color};
    margin: 0 5px;

    @media (min-width: 1280px) {
        font-size: 45px;
    }

    @media (min-width: 1440px) {
        font-size: 55px;
    }
`;

export const StyledCalendarPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (min-width: 1280px) {
        padding: 40px;
    }

    @media (min-width: 1440px) {
        padding: 60px;
    }
`;

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LoginButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 20px;

    &:hover {
        background-color: #333;
    }

    @media (min-width: 1280px) {
        padding: 15px 30px;
        font-size: 18px;
    }

    @media (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 20px;
    }
`;
