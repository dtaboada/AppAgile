import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Dashboard() {
  const [dashboardInput, setDashboard] = useState({
    wod: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setDashboard({ ...dashboardInput, [e.target.name]: e.target.value });
  };

  const submitDashboard = (e) => {
    e.preventDefault();

    const data = {
      wod: dashboardInput.wod,
    };

    axios.post(`/api/wod-dashboard`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "Agregado");
        document.getElementById("dashboard_form").reset();
      } else if (res.data.status === 400) {
        setDashboard({ ...dashboardInput, error_list: res.data.errors });
      }
    });
  };

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Ejercicios</h1>
      <form onSubmit={submitDashboard} id="dashboard_form">
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
              Home
            </button>
          </li>
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
              Wods
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
              <label>Ejemplo</label>
              <textarea
                type="text"
                name="wod"
                onChange={handleInput}
                value={dashboardInput.wod}
                className="form-control"
              ></textarea>
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
          Boton
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
