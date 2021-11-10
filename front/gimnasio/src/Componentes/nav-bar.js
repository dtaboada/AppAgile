import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import swal from "sweetalert";

function NavBar() {
  const history = useHistory();
  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        swal("Cerro sesion correctamente", res.data.message, "success");
        history.push("/");
      } else {
      }
    });
  };
  var AuthButtons = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButtons = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registrarse
          </Link>
        </li>
      </ul>
    );
  } else {
    AuthButtons = (
      <li className="nav-item">
        <button
          type="submit"
          onClick={logoutSubmit}
          className="nav-link btn btn-danger btn-sm text-white"
        >
          Cerrar sesion
        </button>
      </li>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="#">
          GymFit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContente>"
          aria-current="page"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/wods">
                Wods
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/horarios">
                Horarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/DemoWod">
                DemoWod
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contacto">
                Contacto
              </Link>
            </li>
            {AuthButtons}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
