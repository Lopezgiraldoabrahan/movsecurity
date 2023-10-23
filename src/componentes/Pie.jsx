import React from "react";
import mov from '../imagenes/mov.png';

function Productos(){
    return(
      <div className="pie p-1">
              <div class="card">
        <img src={mov} alt="" />
  <h5 class="card-header">Nuestro servicio</h5>
  <div class="card-body">
    <h5 class="card-title">Como funciona?</h5>
    <p class="card-text">Ofrecemos el mejor servicio de seguridad para tu hogar o lugar de trabajo contamos con un sistema de movimientos de fps al detectar un movimiento envia una notificacion al usuario.</p>
    <a href="#" class="btn btn-primary">Ver tutorial</a>
  </div>
</div>
      </div>
    );
}

export default Productos;
