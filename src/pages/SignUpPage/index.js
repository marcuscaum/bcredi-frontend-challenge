import React from 'react';
import MediaQuery from 'react-responsive';

import SideImage from 'components/SideImage';
import NavBar from 'components/NavBar';
import Toaster from 'components/Toaster';

import SignUpForm from 'containers/SignUpForm';

import { MainLayout, Container, FormContainer } from './index.styled';

const SignUpPage = () => (
  <MainLayout>
    <MediaQuery minDeviceWidth={700}>
      <SideImage
        messageAuthor={
          <React.Fragment>
            <strong>Camila Bragança,</strong>
            <br />
            Sideral Tecnologia
          </React.Fragment>
        }
        message="Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."
      />
    </MediaQuery>
    <Container>
      <Toaster />
      <NavBar />
      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </Container>
  </MainLayout>
);

export default SignUpPage;
