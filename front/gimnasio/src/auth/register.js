import React, { useState } from "react";
import NavBar from "../Componentes/nav-bar";
import axios from "axios";

function Register() {
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.presist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.post(`http://localhost:8000/api/register`, data).then((res) => {});
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
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label>Nombre completo</label>
                    <input
                      type=""
                      name="name"
                      onChange={handleInput}
                      value={registerInput.name}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type=""
                      name="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                      type=""
                      name="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirmar contraseña</label>
                    <input
                      type=""
                      name="confirm_password"
                      onChange={handleInput}
                      value={registerInput.confirm_password}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Register
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

export default Register;
