import React from 'react';

import FormField from 'components/FormField';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';

import PadlockIcon from 'assets/padlock.svg';

import {
  Form,
  FormSection,
  SignUpForm,
  FormHeader,
  FormFooter,
} from './index.styled';

const SignUpFormComponent = () => (
  <SignUpForm>
    <FormHeader>
      <h1>Criar meu cadastro</h1>
      <h2>
        Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF.
      </h2>
    </FormHeader>
    <Form>
      <FormField label="Nome completo" error="test">
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
      <Checkbox
        fontSize="12px"
        color="#cccccc"
        label={
          <React.Fragment>
            Li e estou de acordo com a<a href="#"> Política de Privacidade </a>e
            a Política de Uso de Informações.
          </React.Fragment>
        }
      />
      <Button type="primary" icon={<img src={PadlockIcon} alt="" />}>
        Cadastrar
      </Button>
    </Form>
    <FormFooter>
      Já fiz meu cadastro. <a href="/">Entrar agora.</a>
    </FormFooter>
  </SignUpForm>
);

export default SignUpFormComponent;
