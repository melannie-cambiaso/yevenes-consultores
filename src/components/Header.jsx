import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const headerContent = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Quiénes somos",
    link: "/about",
  },
  {
    content: [
      {
        title: "Servicios  y Asesorías Contables Mensuales",
        link: "/contability",
      },
      {
        title: "Servicios y Asesorías en el área de Recursos Humanos",
        link: "/human-resources",
      },
      {
        title: "Servicios Tributarios",
        link: "/taxes",
      },
      {
        title: "Servicios de Auditorias y complementarios",
        link: "/audit-complementary",
      },
      {
        title: "Servicios Administración de Edificios y Condominios",
        link: "/managment",
      },
    ],
  },
  {
    title: "Contacto",
    link: "/contact",
  },
];

export const Header = () => {
  const styles = {
    container: {
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
    },
  };
  return (
    <nav style={styles.container} className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img width="200px" src={logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {headerContent.map((content) => {
              if (content.title) {
                return (
                  <NavLink
                    key={content.title}
                    to={content.link}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {content.title}
                  </NavLink>
                );
              } else {
                return (
                  <li key={"item"} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/services"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Servicios
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      {content.content.map((el) => {
                        return (
                          <NavLink
                            key={el.title}
                            to={`/services${el.link}`}
                            className="dropdown-item"
                          >
                            {el.title}
                          </NavLink>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>
    // <div
    //   style={{
    //     flexDirection: "row",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     padding: "20px",
    //   }}
    // >
    //   <img width="200px" src={logo} alt="" />
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       columnGap: "20px",
    //     }}
    //   >
    //     {headerContent.map(({ link, title }) => {
    //       return (
    //         <NavLink key={title} to={link}>
    //           {title}
    //         </NavLink>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
