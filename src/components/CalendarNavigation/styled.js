import styled from '@emotion/styled';

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MonthLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

export const NavButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #000;
  position: relative;

  &::before {
    content: '${props => (props.direction === 'left' ? '\\003C' : '\\003E')}'; /* '<' или '>' в Unicode */
    font-size: 20px;
    color: #000;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
  }
`;