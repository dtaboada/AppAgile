import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewHour() {
  const [loading, setLoading] = useState(true);
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    axios.get(`/api/getHorarios`).then((res) => {
      if (res.data.status === 200) {
        //console.log(res.data.ejercicios);
        setHorarios(res.data.horarios);
        setLoading(false);
      }
    });
  });

  if (loading) {
    return <h4>Cargando horarios..</h4>;
  } else {
    var showHorariosList = "";
    showHorariosList = horarios.map((item, idx) => {
      return (
        <div id="horarios_wood" className="col-md-3" key={idx}>
          <div className="card">
            <div className="card-body">
              <Link to="/hour">
                <h5>{item.hora}</h5>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div  className="py-3 bg-success">
      <div id="caja_horarios" className="container">
        <h6>Horarios</h6>
        {showHorariosList}
      </div>
    </div>
  );
}

export default ViewHour;
