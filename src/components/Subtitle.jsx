import React from "react";
import { globalStyles } from "../themes/globalStyles";

export const Subtitle = ({ children }) => {
  return <h4 style={globalStyles.subtitle}>{children}</h4>;
};
