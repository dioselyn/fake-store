import { useState } from "react";

export const useForm = (
  initialForm,
  validateForm,
  setBuyer,
  setOpenModalPurchase,
  setOpenModalSuccess,
  resetCart
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setBuyer(form);
    setOpenModalPurchase(false);
    setOpenModalSuccess(true);
    resetCart();
    setLoading(false);
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
