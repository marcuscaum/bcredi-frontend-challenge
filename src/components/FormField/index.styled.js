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
    border: 1px solid
      ${({ error, theme: { destructive, ultraLightGray } }) =>
        error ? destructive : ultraLightGray};

    &::placeholder {
      color: #cccccc;
    }
  }

  span {
    color: ${({ theme: { destructive } }) => destructive};
    line-height: 1.29;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${({ theme: { lightGray } }) => lightGray};
`;
