import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
import TablaBeneficio from "../tablaBeneficio/tablaBeneficio";

function Beneficio() {
  const [beneficioInput, setBeneficio] = useState({
    descripcion: "",
    status: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setBeneficio({ ...beneficioInput, [e.target.name]: e.target.value });
  };

  const submitBeneficio = (e) => {
    e.preventDefault();

    const data = {
      descripcion: beneficioInput.descripcion,
      status: beneficioInput.status,
      };
    
    /*mostrarModalInsertar=()=> {
      this.setState({modalInsertar:true});
    }

    ocultarModalInsertar=()=> {
      this.setState({modalInsertar:false});
    }*/

    axios.post(`/api/beneficio`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Agregado correctamente", res.data.message, "success");
        document.getElementById("beneficio_form").reset();
      } else if (res.data.status === 400) {
        setBeneficio({ ...beneficioInput, error_list: res.data.errors });
      }
    });
  };

  
  /*insertarElemento=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista})
  }*/

  return ( <>
    <div className="container-fluid px-4">
      <h1 className="mt-4">Beneficios</h1>
      <form onSubmit={submitBeneficio} id="beneficio_form">
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
              Beneficios
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
              <label>Beneficio</label>
              <textarea
                type="text"
                name="descripcion"
                onChange={handleInput}
                value={beneficioInput.descripcion}
                className="form-control"
              ></textarea>
              <span>{beneficioInput.error_list.beneficio}</span>
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
          Agregar Beneficio
        </button>
      </form>
    </div>
    <div> 
    <TablaBeneficio>

    </TablaBeneficio>
    </div>
    </>
  );
}

export default Beneficio;

