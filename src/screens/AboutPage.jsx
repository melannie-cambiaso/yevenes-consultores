import React from "react";
import { CompanyName } from "../components/CompanyName";
import { globalStyles } from "../themes/globalStyles";

export const AboutPage = () => {
  return (
    <section style={globalStyles.sectionContainer}>
      <h3 style={globalStyles.subtitle}>¿Quiénes somos?</h3>
      <section>
        <CompanyName /> es una empresa de Servicios de Outsourcing y Asesorías,
        que cuenta con profesionales de más de 20 años de experiencia en las
        áreas de administración, contabilidad, auditoría, recursos humanos e
        impuestos. <br />
        Yevenes Consultores & Auditores cuenta con un especialista en el ámbito
        tributario y contable. <br />
        Preparados para enfrentar las complejidades que el sistema impositivo
        nacional presenta. Los impuestos en Chile cambiaron y en nuestra empresa
        encontrara ese apoyo para enfrentar estos cambios. <br />
        El servicio abarca aspectos de carácter tributario, previsional y
        laboral, entre otros, facilitando: <br />
        <ul>
          <li>
            La entrega de información financiera-contable de manera eficiente,
            eficaz y oportuna, que permita un apoyo en la toma de decisiones.
          </li>
          <li>
            Asesoría en materias de remuneración y pagos previsionales, tanto
            del rol privado como de toda la planilla de una empresa.
          </li>
          <li>
            Asesoría y apoyo técnico para dar cumplimiento riguroso de sus
            obligaciones tributarias.
          </li>
        </ul>
      </section>
    </section>
  );
};
