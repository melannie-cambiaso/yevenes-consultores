import React from "react";
import logo from "../assets/logo.png";
import { colors } from "../themes/colors";

const content = ["Inicio", "Quiénes somos", "Servicios", "Contacto"];

export const Header = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <img width="200px" src={logo} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          columnGap: "20px",
        }}
      >
        {content.map((element) => {
          return <h3 style={{ color: colors.secondary }}>{element}</h3>;
        })}
      </div>
    </div>
  );
};
