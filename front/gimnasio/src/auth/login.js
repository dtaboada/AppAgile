import React, { useState } from "react";
import { useHistory } from "react-router";
import NavBar from "../Componentes/nav-bar";
import axios from "axios";
import swal from "sweetalert";

function Login() {
  const history = useHistory();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.usarname);
          swal("Login exitoso", res.data.message, "success");
          history.push("/");
        } else if (res.data.status === 401) {
          swal("Cuidado", res.data.message, "warning");
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
  };

  return (
    <div>
      <NavBar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Registro</h4>
              </div>
              <div className="card-body">
                <form onSubmit={loginSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleInput}
                      value={loginInput.email}
                      className="form-control"
                    ></input>
                    <span>{loginInput.error_list.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      value={loginInput.password}
                      className="form-control"
                    ></input>
                    <span>{loginInput.error_list.password}</span>
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
