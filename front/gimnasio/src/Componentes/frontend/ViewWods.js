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
        <div className="col-md-2" key={idx}>
          <div className="card">
            <div className="card-body">
              <h5>{item.wod}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="py-3 bg-success">
      <div className="container">
        <h6>Wods</h6>
        {showEjerciciosList}
      </div>
    </div>
  );
}

export default ViewWods;
