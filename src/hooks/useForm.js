import { useState } from "react";

export const useForm = (initialForm) => {
  const initial = initialForm ?? {};
  const [formState, setFormState] = useState(initial);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setFormState(initial);

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
