import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function ViewWods() {
  const [loading, setLoading] = useState(true);
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    axios.get(`/api/getEjercicios`).then((res) => {
      if (res.data.status === 200) {
        // console.log(res.data.ejercicios);
        setEjercicios(res.data.ejercicios);
        setLoading(false);
      }
    });
  });

  if (loading) {
    return <h4>Cargando ejercicios..</h4>;
  } else {
    var showEjerciciosList = "";
    showEjerciciosList = ejercicios.map((item, idx) => {
      return (
        <div id="ejercicios_wood" className="container" key={idx} >
          <div className="row">
            <div id="texto-wod" className="col-sm">
              <h5>{item.wod}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="py-3 bg-success">
      <div id="caja_wods" className="container">
        <h6>Wods</h6>
        {showEjerciciosList}
      </div>
    </div>
  );
}

export default ViewWods;
