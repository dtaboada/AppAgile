import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ViewHour() {
  const [loading, setLoading] = useState(true);
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    axios.get(`/api/user-horarios`).then((res) => {
      if (res.data.status === 200) {
        setHorarios(res.data.horarios);
        setLoading(false);
      }
    });
  }, []);

  function confirmarAsistencia(horarioId) {
    console.log('confirmo asistencia a clase: ' + horarioId) 
    axios.post('/api/asistir', {
      horarioId: horarioId,
      asiste: true
    })
    .then(function (response) {
      if (response.data.status == 201){
        let newHorarios = horarios;
        let newHorario = newHorarios.find((horario) => horario.id == horarioId);
        newHorario.asiste = true;
        newHorario.cupo = response.data.horario.cupo;
        setHorarios([...horarios]);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function cancelarAsistencia(horarioId) {
    console.log('cancelo asistencia a clase: ' + horarioId) 
    axios.post('/api/asistir', {
      horarioId: horarioId,
      asiste: false
    })
    .then(function (response) {
      if (response.data.status == 201){
        let newHorarios = horarios;
        let newHorario = newHorarios.find((horario) => horario.id == horarioId);
        newHorario.asiste = false;
        newHorario.cupo = response.data.horario.cupo;
        setHorarios([...horarios]);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  if (loading) {
    return <h4>Cargando horarios..</h4>;
  } else {
    var showHorariosList = "";
    showHorariosList = horarios.map((item, idx) => {
    
    return (
      <div id="horarios_wood" className="col-md-3" key={idx}>
        <div className="card">
          <div className="card-body">
              <h5>{item.hora}</h5>
               {
               item.asiste ? 
                <button id="boton" disabled onClick={() => confirmarAsistencia(item.id)} type="submit" className="btn btn-success px-4 float-end">
                  Asistir
                </button> :
                <button id="boton" onClick={() => confirmarAsistencia(item.id)} type="submit" className="btn btn-success px-4 float-end">
                 Asistir
                </button>
               }
               {
                 item.asiste ? 
                 <button id="boton" onClick={() => cancelarAsistencia(item.id)} type="submit" className="btn btn-success px-4 float-end">
                   Cancelar
                 </button> :
                <button  id="boton" disabled onClick={() => cancelarAsistencia(item.id)} type="submit" className="btn btn-success px-4 float-end">
                 Cancelar
                </button>
               }
              <h5>Cupos: {item.cupo}/10</h5>
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
