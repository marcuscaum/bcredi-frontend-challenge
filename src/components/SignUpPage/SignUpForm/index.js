import React from 'react';

import FormField from 'components/FormField';

const SignUpForm = () => (
  <form>
    <header>
      <h1>Criar meu cadastro</h1>
      <h2>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</h2>
    </header>
    <FormField label="Nome completo">
      <input type="text" />
    </FormField>
  </form>
);

export default SignUpForm;
