import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  input {
    padding: 14px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${({ theme: { lightGray } }) => lightGray};
`;
