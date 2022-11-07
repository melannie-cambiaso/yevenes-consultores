import React from "react";
import { Container } from "../../components/Container";

export const AuditComplementary = () => {
  return (
    <Container title={"Servicios de Auditorias y complementarios"}>
      <p>
        Profesional con más de 20 años de experiencia, asegurando un servicio
        profesional, independiente, crítico y sistemático. El enfoque es para
        todo tipo de empresas, sean estas sociedades limitadas, anónimas,
        cerradas o abiertas, que estén dentro de la clasificación de Micro y
        PYME:
      </p>
      <ul>
        <li>Auditoría Interna</li>
        <li>Auditoría Externa</li>
        <li>Auditoría de Estados Financieros</li>
        <li>Arqueo de Documentos y de Efectivo</li>
        <li>Toma de Inventario de Existencias y de Activo Fijo</li>
      </ul>
      <strong>
        Agregamos a todos los servicios antes mencionado apoyo en:
      </strong>
      <ul>
        <li>Implementación en IFRS</li>
        <li>Implementación Control Interno</li>
      </ul>
    </Container>
  );
};
