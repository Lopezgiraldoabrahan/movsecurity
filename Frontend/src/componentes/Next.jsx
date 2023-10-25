import React from "react";
import ojito from "../imagenes/ojito.png";



function Next(){
    return(
        <div>
          <div className='Centrico' px-1>
            <div class="card" style={{width: "100vw"}}>
                <img src={ojito} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">CENTRO DE AYUDA</h5>
                    <p>Descrebenos tu problema por favor</p>
<div class="input-group">
  <input type="text" class="form-control" placeholder="Describe tu problema" aria-label="Recipient's username with two button addons"/>
  <button class="btn btn-outline-secondary" type="button">Enviar </button>
  <button class="btn btn-outline-secondary" type="button">Cancelar</button>
</div>
                </div>
                <div class="card-body">
                    <a href="/Inicio" class="card-link">Cancelar</a>
                    <a href="/Inicio" class="card-link">Continuar</a>
                </div>
            </div>
            <div>
                <p>Recuerda que nuestro equipo trabaja para que te sientas comodo y nuestra prioridad es tu seguridad</p>
            </div>

        </div>
        </div>

    );
}

export default Next;