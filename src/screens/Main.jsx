import React from "react";
import { Header } from "../components/Header";
import { Route, Router } from "react-router-dom";
import { HomePage } from "./HomePage";
import { SectionImage } from "../components/SectionImage";
import { AboutPage } from "./AboutPage";
import { Contability } from "./services/Contability";
import { HumanResources } from "./services/HumanResources";
import { Taxes } from "./services/Taxes";
import { AuditComplementary } from "./services/AuditComplementary";
import { ContactPage } from "./ContactPage";
import { Managment } from "./services/Managment";

export const Main = () => {
  return (
    <>
      <Header />
      <SectionImage />
      <Router basename="yevenes-consultores">
        <Route element={<HomePage />} path={"/"} />
        <Route element={<AboutPage />} path={"/about"} />
        <Route element={<ContactPage />} path={"/contact"} />
        <Route element={<Contability />} path={"/services/contability"} />
        <Route
          element={<HumanResources />}
          path={"/services/human-resources"}
        />
        <Route element={<Taxes />} path={"/services/taxes"} />
        <Route
          element={<AuditComplementary />}
          path={"/services/audit-complementary"}
        />
        <Route element={<Managment />} path={"/services/managment"} />
      </Router>
    </>
  );
};
