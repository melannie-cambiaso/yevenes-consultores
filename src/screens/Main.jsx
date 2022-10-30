import React from "react";
import { Header } from "../components/Header";
import headerImage from "../assets/imageHeader.jpg";
import { colors } from "../themes/colors";

export const Main = () => {
  const styles = {
    subtitle: {
      color: colors.primary,
    },
  };
  return (
    <div>
      <Header />
      <section
        style={{
          backgroundImage: `url(${headerImage})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "auto",
          width: "100%",
        }}
      />
      <section style={{ alignContent: "center", padding: "20px" }}>
        <h3 style={styles.subtitle}>¿Por qué elegirnos?</h3>
        <p>
          <strong style={styles.subtitle}>
            Yevenes Consultores & Auditores{" "}
          </strong>
          entrega un trabajo especializado y garantizando de primer nivel, con
          un profesional de experiencia y altamente calificado para asesorarlo y
          apoyarlo, en el cumplimiento de sus obligaciones, con nuestros
          servicio siempre encontrará una solución a la medida de su empresa, en
          el tiempo esperado con una respuesta adecuada y más conveniente para
          Ud. Nuestro objetivo es convertirnos en su mayor aliado con el fin de
          hacer crecer su negocio
        </p>
        <h3 style={styles.subtitle}>Objetivo principal</h3>
        <p>
          Apoyo Profesional y Técnico permanente, brindando servicios de
          soluciones integrales sobre temas contables en General.
        </p>
        <h3 style={styles.subtitle}>Objetivos secundarios</h3>
        <p>
          Con el servicio de CONTABILIDAD EXTERNA, la empresa contará con un
          alto nivel de confianza y eficiencia en cada uno de los servicios
          propuestos permitiendo concentrar sus esfuerzos en las actividades
          centrales de su negocio.
        </p>
      </section>
    </div>
  );
};
