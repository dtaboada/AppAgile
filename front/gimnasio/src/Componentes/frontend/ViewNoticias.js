import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function ViewNoticias() {
  const [loading, setLoading] = useState(true);
  const [noticiasList, setNoticias] = useState([]);

  useEffect(() => {
    axios.get(`/api/getNoticias`).then((res) => {
      if (res.data.status === 200) {
        // console.log(res.data.ejercicios);
        setNoticias(res.data.noticias);
        setLoading(false);
      }
    });
  });

  if (loading) {
    return <h4>Cargando Noticias..</h4>;
  } else {
    var showNoticiasList = "";
    showNoticiasList = noticiasList.map((item, idx) => {
      return (
        <div id="noticias_descripcion" className="container" key={idx} >
          <div className="row">
            <div id="texto-noticia" className="col-sm">
              <h5>{item.descripcion}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="py-3 bg-success">
      <div id="caja_noticias" className="container">
        <h6>Noticias</h6>
        {showNoticiasList}
      </div>
    </div>
  );
}

export default ViewNoticias;
