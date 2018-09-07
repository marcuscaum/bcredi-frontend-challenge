import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  min-width: 0;

  input {
    padding: 14px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid ${({ theme: { ultraLightGray } }) => ultraLightGray};

    &::placeholder {
      color: #cccccc;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${({ theme: { lightGray } }) => lightGray};
`;
