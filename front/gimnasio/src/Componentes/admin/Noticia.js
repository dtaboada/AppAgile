import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

function Noticia(){

    const [noticiaInput, setNoticia] = useState({
        descripcion: "",
        status: "",
        error_list: [],
      });
    
      const handleInput = (e) => {
        e.persist();
        setNoticia({ ...noticiaInput, [e.target.name]: e.target.value });
      };
    
      const submitNoticia = (e) => {
        e.preventDefault();
    
        const data = {
          descripcion: noticiaInput.descripcion,
          status: noticiaInput.status,
          };

    
        axios.post(`/api/add-noticia`, data).then((res) => {
          if (res.data.status === 200) {
            swal("Agregado correctamente", res.data.message, "success");
            document.getElementById("noticia_form").reset();
          } else if (res.data.status === 400) {
            setNoticia({ ...noticiaInput, error_list: res.data.errors });
          }
        });
      };
    return ( <>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Noticias</h1>
          <form onSubmit={submitNoticia} id="noticia_form">
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
                  <span>{noticiaInput.error_list.beneficio}</span>
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
              Agregar Noticia
            </button>
          </form>
        </div>
       
        </>
      );
    }

export default Noticia;