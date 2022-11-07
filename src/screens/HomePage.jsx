import React from "react";
import { CompanyName } from "../components/CompanyName";
import { globalStyles } from "../themes/globalStyles";

export const HomePage = () => {
  return (
    <>
      <section style={globalStyles.sectionContainer}>
        <h3 style={globalStyles.subtitle}>¿Por qué elegirnos?</h3>
        <p>
          <CompanyName />
          entrega un trabajo especializado y garantizando de primer nivel, con
          un profesional de experiencia y altamente calificado para asesorarlo y
          apoyarlo, en el cumplimiento de sus obligaciones, con nuestros
          servicio siempre encontrará una solución a la medida de su empresa, en
          el tiempo esperado con una respuesta adecuada y más conveniente para
          Ud. Nuestro objetivo es convertirnos en su mayor aliado con el fin de
          hacer crecer su negocio
        </p>
        <h3 style={globalStyles.subtitle}>Objetivo principal</h3>
        <p>
          Apoyo Profesional y Técnico permanente, brindando servicios de
          soluciones integrales sobre temas contables en General.
        </p>
        <h3 style={globalStyles.subtitle}>Objetivos secundarios</h3>
        <p>
          Con el servicio de CONTABILIDAD EXTERNA, la empresa contará con un
          alto nivel de confianza y eficiencia en cada uno de los servicios
          propuestos permitiendo concentrar sus esfuerzos en las actividades
          centrales de su negocio.
        </p>
      </section>
    </>
  );
};
