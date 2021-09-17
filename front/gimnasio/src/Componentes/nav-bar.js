import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavLink,
//   NavBtn,
//   NavBtnLink,
// } from "./navBarElements";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import logo from "../fitness.jpg";

const NavBar = () => {
  return (
    <div class="nav-bg">
      <nav class="navegacion-principal contenedor">
        <Link className="nav-link" to="/">
          Inicio
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/register">
          Registrarse
        </Link>
        <Link className="nav-link" to="#"></Link>
      </nav>
    </div>
  );
};

export default NavBar;
