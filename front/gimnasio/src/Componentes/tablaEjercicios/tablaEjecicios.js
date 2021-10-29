import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const TablaEjercicios = () => {
  const [loading, setLoading] = useState(true);
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    axios.get(`/api/getEjercicios`).then((res) => {
      if (res.data.status === 200) {
        //console.log(res.data.ejercicios);
        setEjercicios(res.data.ejercicios);
        setLoading(true);
      } else {
        setLoading(false);
      }
    });
  }, []);

  const eliminarElemento = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Eliminado";

    axios.delete(`/api/delete-ejercicios/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Eliminado", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "success");
        thisClicked.innerText = "Eliminado";
      }
    });
  };

  
  return !loading ? (
    <p>cargando..</p>
  ) : (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Wod</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {ejercicios.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.wod}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => eliminarElemento(e, item.id)}
                >
                  Eliminar
                </button>{" "}
                {"   "}
                <Link
                  to={`edit-ejercicios/${item.id}`}
                  className="btn btn-success"
                >
                  Editar
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TablaEjercicios;
