import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

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

const SignUpFormComponent = ({ validation, onChangeInputValue, saveUser }) => (
  <SignUpForm>
    <FormHeader>
      <h1>Criar meu cadastro</h1>
      <h2>
        Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF.
      </h2>
    </FormHeader>
    <Form>
      <FormField label="Nome completo" name="name">
        <input type="text" placeholder="Escreva seu nome completo" required />
      </FormField>
      <FormField
        label="Email"
        error={validation && validation.email && 'O campo email é obrigatório'}
      >
        <input
          type="text"
          name="email"
          placeholder="Escreva seu email"
          onChange={onChangeInputValue}
        />
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
        name="terms_agreement"
        onChange={onChangeInputValue}
        label={
          <React.Fragment>
            Li e estou de acordo com a
            <a href="#to_somewhen"> Política de Privacidade </a>e a
            <a href="#to_somewhere"> Política de Uso de Informações</a>.
          </React.Fragment>
        }
      />
      <Button
        type="primary"
        icon={<img src={PadlockIcon} alt="" />}
        onClick={saveUser}
      >
        Cadastrar
      </Button>
    </Form>
    <FormFooter>
      Já fiz meu cadastro. <a href="/">Entrar agora.</a>
    </FormFooter>
  </SignUpForm>
);

SignUpFormComponent.propTypes = {
  validation: PropTypes.object.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

export default withStateHandlers(
  { validation: {}, formValues: {} },
  {
    onChangeInputValue: ({ formValues, validation }) => evt => {
      const inputValue =
        evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

      if (!evt.target.value) {
        Object.assign(formValues, { [evt.target.name]: null });
        return Object.assign(validation, {
          [evt.target.name]: true,
        });
      }

      Object.assign(validation, { [evt.target.name]: false });
      return Object.assign(formValues, {
        [evt.target.name]: inputValue,
      });
    },
    saveUser: ({ formValues }) => evt => {
      // function to handle form data
      evt.preventDefault();
      return console.log(formValues);
    },
  }
)(SignUpFormComponent);
