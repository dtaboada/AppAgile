import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function EditEjercicios(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [dashboardInput, setEjercicio] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const ejercicio_id = props.match.params.id;
    axios.get(`/api/edit-ejercicios/${ejercicio_id}`).then((res) => {
      if (res.data.status === 200) {
        setEjercicio(res.data.ejercicio);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/wod-dashboard");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);
  const handleInput = (e) => {
    e.persist();
    setEjercicio({ ...dashboardInput, [e.target.name]: e.target.value });
  };

  const updateEjercicio = (e) => {
    e.preventDefault();

    const ejercicio_id = props.match.params.id;
    const data = dashboardInput;
    axios.put(`api/update-ejercicios/${ejercicio_id}`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Editado", res.data.message, "success");
        setError([]);
      } else if (res.data.status === 422) {
        swal("Todos los campos son obligatorios", "", "error");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/wod-dashboard");
      }
    });
  };

  if (loading) {
    return <h4>Cargando Ejercicios...</h4>;
  }
  return (
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            {" "}
            Editar Ejercicio
            <Link
              to="/admin/wod-dashboard"
              className="btn btn-primary btn-sm float-end"
            >
              VOLVER
            </Link>
          </h4>
        </div>
        <form onSubmit={updateEjercicio}>
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
                <label>Wod del dia</label>
                <textarea
                  type="text"
                  name="wod"
                  onChange={handleInput}
                  value={dashboardInput.wod}
                  className="form-control"
                ></textarea>
                <small className="text-danger">{error.wod}</small>
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
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEjercicios;
