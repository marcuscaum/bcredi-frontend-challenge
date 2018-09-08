import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';
import isEmpty from 'lodash.isempty';
import omitBy from 'lodash.omitby';
import has from 'lodash.has';

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

export const SignUpFormComponent = ({
  validatedFields,
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
          'O campo email é obrigatório'
        }
      >
        <input
          validate="true"
          type="text"
          name="email"
          placeholder="Escreva seu email"
          onChange={onChangeInputValue}
        />
      </FormField>
      <FormSection>
        <FormField label="CPF">
          <input
            type="text"
            name="cpf"
            placeholder="998.767.888-70"
            onChange={onChangeInputValue}
          />
        </FormField>
        <FormField label="Data de nascimento">
          <input
            type="text"
            name="date_of_birth"
            placeholder="21/12/1990"
            onChange={onChangeInputValue}
          />
        </FormField>
      </FormSection>
      <FormField
        label="Senha"
        error={
          validatedFields &&
          validatedFields.password &&
          'O campo senha é obrigatório'
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
          'É necessário aceitar os termos'
        }
      >
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
    formValues: {},
  },
  {
    onChangeInputValue: ({ formValues, validatedFields }) => evt => {
      const inputValue =
        evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

      const availableInputs =
        evt.target.getAttribute('validate') || evt.target.type === 'checkbox';

      if (!inputValue) {
        if (availableInputs) {
          Object.assign(validatedFields, {
            [evt.target.name]: true,
          });
        }
        return Object.assign(formValues, { [evt.target.name]: null });
      }

      if (availableInputs) {
        Object.assign(validatedFields, { [evt.target.name]: false });
      }

      return Object.assign(formValues, {
        [evt.target.name]: inputValue,
      });
    },
    saveUser: ({ formValues, validatedFields }) => evt => {
      evt.preventDefault();
      const fieldKeys = [];

      if (!has(formValues, Object.keys(validatedFields))) {
        Object.entries(validatedFields).forEach(([key, value]) => {
          if (!has(formValues, key) && !value) {
            fieldKeys.push(key);
          }
        });

        if (fieldKeys.length) {
          return fieldKeys.map(key =>
            Object.assign(validatedFields, {
              [key]: true,
            })
          );
        }
      }

      return console.log('formData', formValues);
    },
  }
)(SignUpFormComponent);
