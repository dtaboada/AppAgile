import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

function NavBar() {
  return (
    <div class="nav-bg">
      <nav class="navegacion-principal contenedor">
        <Link className="nav-link" to="#">
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
}

export default NavBar;
