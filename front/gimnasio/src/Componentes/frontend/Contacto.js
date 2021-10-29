import React from "react";
// import ReactDOM from "react-dom";

// import { BrowserRouter as Router } from "react-router-dom";



function Contacto() {
  return (
    <div id="contacto" className="container">
      <div id="caja_contacto" className="container">
        <h1 class="text-white">Sede La Plata</h1>
           <div id="box_contacto">
               <a href="http://maps.google.com/?q=" class="card" >Direccion</a>
               <a href="whatsapp://send?" class="card">telefono</a>
               <a href="mailweb@hotmail.com" class="card">Email</a>
             </div>
    </div>
    </div>
  );
}

export default Contacto;
