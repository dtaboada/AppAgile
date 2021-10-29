import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function EditHorarios(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [horarioInput, setHorario] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const horario_id = props.match.params.id;
    axios.get(`/api/edit-horarios/${horario_id}`).then((res) => {
      if (res.data.status === 200) {
        setHorario(res.data.horario);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/hour");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);
  const handleInput = (e) => {
    e.persist();
    setHorario({ ...horarioInput, [e.target.name]: e.target.value });
  };

  const updateHorario = (e) => {
    e.preventDefault();

    const horario_id = props.match.params.id;
    const data = horarioInput;
    axios.put(`api/update-horarios/${horario_id}`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Editado", res.data.message, "success");
        setError([]);
      } else if (res.data.status === 422) {
        swal("Todos los campos son obligatorios", "", "error");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/hour");
      }
    });
  };

  if (loading) {
    return <h4>Cargando Horarios...</h4>;
  }
  return (
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            {" "}
            Editar Horario
            <Link
              to="/admin/hour"
              className="btn btn-primary btn-sm float-end"
            >
              VOLVER
            </Link>
          </h4>
        </div>
        <form onSubmit={updateHorario}>
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
                Clase y horario
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
         
                <textarea
                  type="text"
                  name="hora"
                  onChange={handleInput}
                  value={horarioInput.hora}
                  className="form-control"
                ></textarea>
                <small className="text-danger">{error.hora}</small>
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

export default EditHorarios;