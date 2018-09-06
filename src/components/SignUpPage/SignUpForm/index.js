import React from 'react';

import FormField from 'components/FormField';
import Button from 'components/Button';

import PadlockIcon from 'assets/padlock.svg';

import { Form, FormSection, SignUpForm } from './index.styled';

const SignUpFormComponent = () => (
  <SignUpForm>
    <header>
      <h1>Criar meu cadastro</h1>
      <h2>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</h2>
    </header>
    <Form>
      <FormField label="Nome completo">
        <input type="text" placeholder="Escreva seu nome completo" />
      </FormField>
      <FormSection>
        <FormField label="CPF">
          <input type="text" placeholder="998.767.888-70" />
        </FormField>
        <FormField label="Data de nascimento">
          <input type="text" placeholder="21/12/1990" />
        </FormField>
      </FormSection>
      <FormField label="Senha">
        <input type="password" placeholder="Cadastre uma senha" />
      </FormField>
      <Button
        type="primary"
        icon={<img src={PadlockIcon} alt="" />}
        onClick={() => console.log('test')}
      >
        Cadastrar
      </Button>
    </Form>
  </SignUpForm>
);

export default SignUpFormComponent;
