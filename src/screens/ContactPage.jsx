import React from "react";
import { Container } from "../components/Container";
import { useForm } from "../hooks/useForm";

export const ContactPage = () => {
  const { name, email, text, onInputChange } = useForm({
    name: "",
    email: "",
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container title={"Contacto"}>
      <p>
        Somos su mejor alternativa dentro del mercado con precios convenientes y
        a su medida
      </p>

      <form className="form">
        <label for="name" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          placeholder="Introduzca su nombre"
          value={name}
          onChange={onInputChange}
          className="form-control mb-3"
        />
        <label for="email" class="form-label">
          Correo
        </label>
        <input
          type="text"
          name="email"
          placeholder="Introduzca su correo"
          value={email}
          onChange={onInputChange}
          className="form-control mb-3"
        />
        <label for="text" class="form-label">
          Mensaje
        </label>
        <textarea
          name="text"
          placeholder="Escriba su mensaje"
          value={text}
          onChange={onInputChange}
          className="form-control mb-3"
        />

        <button onClick={handleSubmit} className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Container>
  );
};
