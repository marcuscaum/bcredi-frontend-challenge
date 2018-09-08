import has from 'lodash.has';
import { toast } from 'react-toastify';

export default {
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
  saveUser: ({
    formValues,
    validatedFields,
    validationErrorMessages,
  }) => evt => {
    evt.preventDefault();

    const fieldKeys = [];
    const emailRegex =
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

    Object.entries(validatedFields).forEach(([key]) => {
      if (!has(formValues, key)) {
        fieldKeys.push(key);
      }
    });

    if (formValues.email && !formValues.email.match(emailRegex)) {
      Object.assign(validatedFields, {
        email: true,
      });
      Object.assign(validationErrorMessages, {
        email: 'Adicione um email válido',
      });
    }

    if (fieldKeys.length) {
      return fieldKeys.map(key =>
        Object.assign(validatedFields, {
          [key]: true,
        })
      );
    }

    console.table(formValues);

    return toast('Parabéns! Cadastro realizado com sucesso!', {
      position: toast.POSITION.TOP_CENTER,
    });
  },
};
