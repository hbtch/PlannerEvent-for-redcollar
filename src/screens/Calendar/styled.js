import styled from '@emotion/styled';

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #fff;

`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 200px;
    display: block;
    height: 40px;
    margin-right: 20px;
`;

export const H1 = styled.h1`
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-style: bold;
    font-size: 45px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    margin: 0;
`;

export const Span = styled.span`
    font-size: 45px;
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-style: bold;
    color: ${props => props.color};
    margin: 0 5px;
`;

export const StyledCalendarPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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
`;