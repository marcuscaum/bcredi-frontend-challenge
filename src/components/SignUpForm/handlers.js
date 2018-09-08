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

    return toast('Parabéns! Cadastro realizado com sucesso!', {
      position: toast.POSITION.TOP_CENTER,
    });
  },
};
