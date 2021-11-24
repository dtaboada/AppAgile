import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function ViewNoticias() {
  const [loading, setLoading] = useState(true);
  const [noticiaList, setNoticiasList] = useState([]);

  useEffect(() => {
    axios.get(`/api/getNoticias`).then((res) => {
      if (res.data.status === 200) {
        setNoticiasList(res.data.noticia)
      }
        setLoading(false);
      });
  },[]);

  const deleteNoticia = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Eliminado";

    axios.delete(`/api/delete-noticia/${id}`).then(res=>{
      if(res.data.status === 200)
      {
        swal("Eliminado",res.data.message,"success");
        thisClicked.closest('tr').remove();
      }
      else if(res.data.status === 400){
        swal("Success",res.data.message,"success");
        thisClicked.innerText = "Eliminado";
      }
    });
  }
  

  var viewNoticias_HTMLTABLE = "";
  if (loading) {
    return <h4>Cargando noticias..</h4>;
  } else {
    viewNoticias_HTMLTABLE = 
     noticiaList.map((item) => {
      return (
       <tr key={item.id}>
           <td>{item.descripcion}</td>
           <td>
               <Link to={`edit-noticias/${item.id}`} className="btn btn-success btn-sm">Editar</Link>
           </td>
           <td>
               <button type="buttton" onClick= { (e) => deleteNoticia(e, item.id)} className="btn btn-danger btn-sm">Eliminar</button>
           </td>
       </tr>
      );
    });
  }
  return (
    <div className="container px-4">
        <div className="card mt-4">
            <div className="card-header">
                <h4>Lista de noticias
                    <Link to="/admin/add-noticia" className="btn btn-primary btn-sm float-end">Agregar noticia</Link>
                </h4>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Descripcion</th>
                            <th>Editar
                            </th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewNoticias_HTMLTABLE}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    
  );
}

export default ViewNoticias;