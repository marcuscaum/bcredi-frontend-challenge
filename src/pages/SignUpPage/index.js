import React from 'react';
import MediaQuery from 'react-responsive';

import SideImage from 'components/SignUpPage/SideImage';
import SignUpForm from 'components/SignUpPage/SignUpForm';

import { MainLayout, FormContainer } from './index.styled';

const SignUpPage = () => (
  <MainLayout>
    <MediaQuery minDeviceWidth={700}>
      <SideImage
        messageAuthor={(
          <React.Fragment>
            <strong>Camila Bragança,</strong>
            <br />
            Sideral Tecnologia
          </React.Fragment>
)}
        message="Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."
      />
    </MediaQuery>
    <FormContainer>
      <SignUpForm />
    </FormContainer>
  </MainLayout>
);

export default SignUpPage;
