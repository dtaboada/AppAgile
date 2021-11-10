import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function EditBeneficio(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [beneficioInput, setBeneficio] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const beneficio_id = props.match.params.id;
    axios.get(`/api/edit-beneficio/${beneficio_id}`).then((res) => {
      if (res.data.status === 200) {
        setBeneficio(res.data.beneficios);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/beneficio");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);
  const handleInput = (e) => {
    e.persist();
    setBeneficio({ ...beneficioInput, [e.target.name]: e.target.value });
  };

  const updateBeneficio = (e) => {
    e.preventDefault();

    const beneficio_id = props.match.params.id;
    const data = beneficioInput;
    axios.put(`api/update-beneficio/${beneficio_id}`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Editado", res.data.message, "success");
        setError([]);
      } else if (res.data.status === 422) {
        swal("Todos los campos son obligatorios", "", "error");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/beneficios");
      }
    });
  };

  if (loading) {
    return <h4>Cargando Beneficios...</h4>;
  }
  return (
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            {" "}
            Editar beneficio
            <Link
              to="/admin/beneficios"
              className="btn btn-primary btn-sm float-end"
            >
              VOLVER
            </Link>
          </h4>
        </div>
        <form onSubmit={updateBeneficio}>
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
                Beneficio
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
                  name="descripcion"
                  onChange={handleInput}
                  value={beneficioInput.descripcion}
                  className="form-control"
                ></textarea>
                <small className="text-danger">{error.beneficio}</small>
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

export default EditBeneficio;