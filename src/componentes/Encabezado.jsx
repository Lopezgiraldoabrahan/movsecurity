import React from 'react';
import movsecurity from '../imagenes/movsecurity.png';



function Encabezado(){
    return(
      <div className="Ecabezado p-1 ">
        <div class="card">
          <img src={movsecurity} alt="" />
            <div class="card-header">
            </div>
            <div class="card-body">
              <h5 class="card-title">MOVSECURITY</h5>
              <p class="card-text">Trabajamos para brindar  la mejor calidad de seguridad en tu hogar y otros lugares</p>
              <a href="/login" class="btn btn-primary">Empezar ahora</a>
            </div>
        </div>
      </div>
      
  
    );
}
export default Encabezado;