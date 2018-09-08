import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${({ theme, type }) => theme[type]};
  padding: 14px 10px;
  line-height: 1.25;
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  border-radius: 3px;
  box-sizing: border-box;
  position: relative;

  &:disabled {
    background-color: #a6b9dc;
  }

  span {
    position: absolute;
    left: 30px;
  }
`;

export default Button;
