import styled from 'styled-components';

export const SignUpForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormFooter = styled.footer`
  font-size: 14px;
  padding-top: 16px;
  text-align: center;
  color: ${({ theme: { lightGray } }) => lightGray};
  margin-top: 88px;
  border-top: 1px solid ${({ theme: { ultraLightGray } }) => ultraLightGray};

  a {
    color: ${({ theme: { primary } }) => primary};
  }
`;

export const FormHeader = styled.header`
  text-align: left;

  @media (min-width: 700px) {
    text-align: center;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    line-height: 1.25;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
    margin-top: 6px;
    margin-bottom: 24px;
    line-height: 1.5;
    color: ${({ theme: { lightGray } }) => lightGray};
  }
`;

export const FormSection = styled.div`
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
