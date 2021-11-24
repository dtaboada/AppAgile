import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

function EditNoticia(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [noticiaInput, setNoticia] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const noticia_id = props.match.params.id;
    axios.get(`/api/edit-noticia/${noticia_id}`).then((res) => {
      if (res.data.status === 200) {
        setNoticia(res.data.noticias);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/noticia");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);
  const handleInput = (e) => {
    e.persist();
    setNoticia({ ...noticiaInput, [e.target.name]: e.target.value });
  };

  const updateNoticia = (e) => {
    e.preventDefault();

    const noticia_id = props.match.params.id;
    const data = noticiaInput;
    axios.put(`api/update-noticia/${noticia_id}`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Editado", res.data.message, "success");
        setError([]);
      } else if (res.data.status === 422) {
        swal("Todos los campos son obligatorios", "", "error");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("admin/noticia");
      }
    });
  };

  if (loading) {
    return <h4>Cargando Noticias...</h4>;
  }
  return (
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            {" "}
            Editar noticia
            <Link
              to="/admin/noticia"
              className="btn btn-primary btn-sm float-end"
            >
              VOLVER
            </Link>
          </h4>
        </div>
        <form onSubmit={updateNoticia}>
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
                Noticia
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
                  value={noticiaInput.descripcion}
                  className="form-control"
                ></textarea>
                <small className="text-danger">{error.noticia}</small>
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

export default EditNoticia;