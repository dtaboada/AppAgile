import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function ViewBeneficios() {
  const [loading, setLoading] = useState(true);
  const [beneficios, setBeneficios] = useState([]);

  useEffect(() => {
    axios.get(`/api/getBeneficios`).then((res) => {
      if (res.data.status === 200) {
        // console.log(res.data.ejercicios);
        setBeneficios(res.data.beneficio);
        setLoading(false);
      }
    });
  });

  if (loading) {
    return <h4>Cargando beneficios..</h4>;
  } else {
    var showBeneficiosList = "";
    showBeneficiosList = beneficios.map((item, idx) => {
      return (
        <div id="beneficios_descripcion" className="container" key={idx} >
          <div className="row">
            <div id="texto-wod" className="col-sm">
              <h5>{item.descripcion}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="py-3 bg-success">
      <div id="caja_benefcios" className="container">
        <h6>Beneficios</h6>
        {showBeneficiosList}
      </div>
    </div>
  );
}

export default ViewBeneficios;
