import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

function VerNoticias() {
  const [loading, setLoading] = useState(true);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get(`/api/getNoticias`).then((res) => {
      if (res.data.status === 200) {
          console.log(res.data.noticia);
        setNoticias(res.data.noticia);
        setLoading(false);
      }
    });
  });

  if (loading) {
    return <h4>Cargando noticias..</h4>;
  } else {
    var showNoticiasList = '';
    showNoticiasList = noticias.map((item, idx) => {
      return (
        <div className="col-md-4" >
          <div className="card">
            <div className="card-body">
              <h5>{item.descripcion}</h5>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="py-3 bg-success">
      <div id="caja_wods" className="container">
        <h6>Noticias</h6>
        {showNoticiasList}
      </div>
    </div>
  );
}

export default VerNoticias;