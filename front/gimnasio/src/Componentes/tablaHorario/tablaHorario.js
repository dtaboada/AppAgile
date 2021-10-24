import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



const TablaHorarios = () => {
  const [loading, setLoading] = useState(true);
  const [horarios, setHorarios] = useState([]);


  useEffect(() => {
    axios.get(`/api/getHorarios`).then((res) => {
      if (res.data.status === 200) {
        //console.log(res.data.ejercicios);
        setHorarios(res.data.horarios);
        setLoading(true);
      } else {setLoading(false)}
    });
  },[]);

 
  

  const eliminarElemento = (idx) => {
    //axios.delete(`/api/deleteHorario/${idx}`);
    axios.post(`/api/deleteHorario/${idx}`, {
      _method: 'DELETE'
    })
    .then( response => {
       //handle success
    })
    .catch( error => {
       //handle failure
    })  
  }

  return (
  
  !loading ? <p>cargando..</p>:  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hora</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
   {horarios.map((item) => {
    return (<tr key={item.id}> 
      <td>{item.id}</td>
      <td>{item.hora}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => eliminarElemento(item.id)}>Eliminar</button> {"   "}
          <button type="button" className="btn btn-primary">Editar</button></td>

    </tr>)
    })
   }
    
  </tbody>
</table>)
 
}
export default TablaHorarios;