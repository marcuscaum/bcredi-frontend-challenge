import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';
import MaskedInput from 'react-maskedinput';
import MediaQuery from 'react-responsive';

import isEmpty from 'lodash.isempty';
import omitBy from 'lodash.omitby';

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

import handlers from './handlers';

export const SignUpFormComponent = ({
  validatedFields,
  validationErrorMessages,
  onChangeInputValue,
  saveUser,
  formValues,
}) => (
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
        <input
          type="text"
          placeholder="Escreva seu nome completo"
          name="name"
          onChange={onChangeInputValue}
        />
      </FormField>
      <FormField
        label="Email"
        error={
          validatedFields &&
          validatedFields.email &&
          validationErrorMessages.email
        }
      >
        <input
          validate="true"
          type="email"
          name="email"
          placeholder="Escreva seu email"
          onChange={onChangeInputValue}
        />
      </FormField>
      <FormSection>
        <FormField label="CPF">
          <MaskedInput
            mask="111.111.111-11"
            size="0"
            type="text"
            name="cpf"
            placeholder="998.767.888-70"
            onChange={onChangeInputValue}
          />
        </FormField>
        <FormField label="Data de nascimento">
          <MediaQuery minDeviceWidth={700}>
            <MaskedInput
              mask="11/11/1111"
              size="0"
              type="text"
              name="date_of_birth"
              placeholder="21/12/1990"
              onChange={onChangeInputValue}
            />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={700}>
            <input
              type="date"
              name="date_of_birth"
              placeholder="21/12/1990"
              onChange={onChangeInputValue}
            />
          </MediaQuery>
        </FormField>
      </FormSection>
      <FormField
        label="Senha"
        error={
          validatedFields &&
          validatedFields.password &&
          validationErrorMessages.password
        }
      >
        <input
          validate="true"
          type="password"
          name="password"
          placeholder="Cadastre uma senha"
          onChange={onChangeInputValue}
        />
      </FormField>
      <FormField
        error={
          validatedFields &&
          validatedFields.terms_agreement &&
          validationErrorMessages.terms_agreement
        }
      >
        <Checkbox
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
      </FormField>
      <Button
        type="primary"
        icon={<img src={PadlockIcon} alt="" />}
        onClick={saveUser}
        disabled={isEmpty(omitBy(formValues, isEmpty))}
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
  validatedFields: PropTypes.object.isRequired,
  validationErrorMessages: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

export default withStateHandlers(
  {
    validatedFields: {
      email: false,
      password: false,
      terms_agreement: false,
    },
    validationErrorMessages: {
      email: 'O campo email é obrigatório',
      password: 'O campo senha é obrigatório',
      terms_agreement: 'É necessário aceitar os termos',
    },
    formValues: {},
  },
  { ...handlers }
)(SignUpFormComponent);
