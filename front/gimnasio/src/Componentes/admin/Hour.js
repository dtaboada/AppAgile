import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

function Hour() {
  const [horarioInput, setHorario] = useState({
    hora: "",
    status: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setHorario({ ...horarioInput, [e.target.name]: e.target.value });
  };

  const submitHorario = (e) => {
    e.preventDefault();

    const data = {
      hora: horarioInput.hora,
      status: horarioInput.status,
    };

    axios.post(`/api/hour`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Agredado correctamente", res.data.message, "success");
        document.getElementById("horario_form").reset();
      } else if (res.data.status === 400) {
        setHorario({ ...horarioInput, error_list: res.data.errors });
      }
    });
  };

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Horarios</h1>
      <form onSubmit={submitHorario} id="horario_form">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Horario de las clases
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="form-group mb-3">
              <label>Horario y clase</label>
              <textarea
                type="text"
                name="hora"
                onChange={handleInput}
                value={horarioInput.hora}
                className="form-control"
              ></textarea>
              <span>{horarioInput.error_list.horario}</span>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
        </div>
        <button type="submit" className="btn btn-primary px-4 float-end">
          Agregar horario
        </button>
      </form>
    </div>
  );
}

export default Hour;
