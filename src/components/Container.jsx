import React from "react";
import { globalStyles } from "../themes/globalStyles";

export const Container = ({ title, children }) => {
  return (
    <section style={globalStyles.sectionContainer}>
      <h3 style={globalStyles.subtitle}>{title}</h3>
      {children}
    </section>
  );
};
