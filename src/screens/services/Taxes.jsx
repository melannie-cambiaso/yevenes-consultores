import React from "react";
import { Container } from "../../components/Container";

export const Taxes = () => {
  return (
    <Container title={"Servicios Tributarios"}>
      <p>
        Hoy en día, como es de conocimiento las continuas reformas nos obligan a
        estar completamente actualizados, para lo que nuestro compromiso es
        capacitarnos constantemente y mantenernos vigentes en materia
        tributaria, con esto podemos entregar la tranquilidad que se encuentran
        en las mejores manos, con profesionales de experiencia y alta calidad,
        comprometidos con usted y su negocio. <br />
        Se detallan los siguientes servicios:
      </p>
      <ul>
        <li>Impuestos Mensuales</li>
        <li>Renta Anual</li>
        <li>Declaraciones Juradas</li>
        <li>
          Rectificatorias y representación ante los organismos reguladores.
        </li>
        <li>Asesoría en materia tributaria</li>
        <li>Y cualquier otro requerimiento que se requiera para su negocio.</li>
      </ul>
    </Container>
  );
};
