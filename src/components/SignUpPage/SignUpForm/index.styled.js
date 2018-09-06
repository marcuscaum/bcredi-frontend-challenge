import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: nowrap;

  @media (min-width: 700px) {
    flex-direction: row;
    div {
      &:first-child {
        margin-right: 24px;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
