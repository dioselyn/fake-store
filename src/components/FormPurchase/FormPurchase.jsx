import React from "react";
import { useForm } from "../../hooks/useForm";
import "../../styles/_FormPurchase.scss";

function FormPurchase({
  setBuyer,
  setOpenModalPurchase,
  setOpenModalSuccess,
  resetCart,
}) {
  const initialForm = {
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexAddress = /^.{1,160}$/;
    let regexCity = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^\d{7,13}$/;

    if (!form.name.trim()) {
      errors.name = "the name field is required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "the name field only accepts letters and blank spaces";
    } else if (!form.email.trim()) {
      errors.email = "the email field is required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "the email field is invalid";
    } else if (!form.phone.trim()) {
      errors.phone = "the phone field is required";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "the phone field is invalid";
    } else if (!form.address.trim()) {
      errors.address = "the address field is required";
    } else if (!regexAddress.test(form.address.trim())) {
      errors.address = "the address cannot exceed 255 characters";
    } else if (!form.city.trim()) {
      errors.city = "the city field is required";
    } else if (!regexCity.test(form.city.trim())) {
      errors.city = "the city field is invalid";
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useForm(
      initialForm,
      validationsForm,
      setBuyer,
      setOpenModalPurchase,
      setOpenModalSuccess,
      resetCart
    );

  return (
    <div className="form-buyer__content">
      <h3>Buyer Information:</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-buyer__label">Name: </label>
        <input
          className="form-buyer__input"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <p>
            <small className="danger">{errors.name}</small>
          </p>
        )}
        <label className="form-buyer__label">Email: </label>
        <input
          className="form-buyer__input"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && (
          <p>
            <small className="danger">{errors.email}</small>
          </p>
        )}
        <label className="form-buyer__label">Phone: </label>
        <input
          className="form-buyer__input"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.phone}
          required
          max="13"
        />
        {errors.phone && (
          <p>
            <small className="danger">{errors.phone}</small>
          </p>
        )}

        <label className="form-buyer__label">Address: </label>
        <textarea
          className="form-buyer__textarea"
          id="address"
          name="address"
          placeholder="Enter your address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.address}
          required
        />
        {errors.address && (
          <p>
            <small className="danger">{errors.address}</small>
          </p>
        )}
        <label className="form-buyer__label">City:</label>
        <input
          className="form-buyer__input"
          id="city"
          name="city"
          type="text"
          placeholder="Enter your city"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.city}
          required
        />
        {errors.city && (
          <p>
            <small className="danger">{errors.city}</small>
          </p>
        )}

        <input
          type="submit"
          className="form-buyer__submit button-secondary"
          value="Confirm"
        />
      </form>
    </div>
  );
}

export { FormPurchase };
