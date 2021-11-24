import React, { useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function EditNoticias(props){

    const history = useHistory()
    const [noticiaInput,setNoticia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        const noticia_id = props.match.params.id;
        axios.get(`/api/edit-noticias/${noticia_id}`).then((res) => {
          if (res.data.status === 200) {
            setNoticia(res.data.noticias);
          } else if (res.data.status === 404) {
            swal("Error", res.data.message, "error");
            history.push("/admin/ViewNoticias");
          }
          setLoading(false);
        });
      }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setNoticia({...noticiaInput, [e.target.name]: e.target.value});
    }

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
            history.push("admin/ViewNoticias");
          }
        });
      };

    if (loading) {
        return <h4>Cargando noticias..</h4>;
    }


    return(
        <div className="container px-4">
             <div className="card mt-4">
            <div className="card-header">
                <h4>Editar noticias
                    <Link to="/admin/ViewNoticias" className="btn btn-primary btn-sm float-end">Volver</Link>
                </h4>
            </div>
            <div className="card-body">
            <div className="container-fluid px-4">
         
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
                  Noticias
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
                  <label>Noticia</label>
                  <textarea
                    type="text"
                    name="descripcion"
                    onChange={handleInput}
                    value={noticiaInput.descripcion}
                    className="form-control"
                  ></textarea>
                  {/* <span>{noticiaInput.error_list.noticia}</span> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
            <button type="submit" className="btn btn-success px-4 float-end">
              Editar noticia
            </button>
          </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default EditNoticias;