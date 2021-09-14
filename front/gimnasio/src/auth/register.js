import React from "react";
import NavBar from "../Componentes/nav-bar";

function Register() {
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
                <form>
                  <div className="form-group mb-3">
                    <label>Nombre completo</label>
                    <input
                      type=""
                      name="name"
                      className="form-control"
                      value=""
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type=""
                      name="email"
                      className="form-control"
                      value=""
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                      type=""
                      name="password"
                      className="form-control"
                      value=""
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirmar contraseña</label>
                    <input
                      type=""
                      name="confirm_password"
                      className="form-control"
                      value=""
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
