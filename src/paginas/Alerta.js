import React from "react";
import alerta from "../imagenes/alerta.png";

// style={{"width": "180px", "border-radius": "10px"}}
function Alerta() {
    return(
        <section style={{"background-color": "#BBDEFB"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
        <div class="card p-3" style={{"border-radius": "15px"}}>
          <div class="card-body p-0 m-3">
            <div class="d-flex text-black">
              <div class="flex-shrink-5">
                <img src={alerta}
                  alt="Generic placeholder image" class="img-fluid"
                  style={{"width": "180px", "border-radius": "10px"}} />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">Alerta!!</h5>
                <p class="mb-2 pb-1" style={{"color": "#2b2a2a"}}>
                ¡¡HEMOS DETECTADO UN MOVIMIENTO INUSUAL!!
                </p>
                
                
                <div class="d-flex pt-1">
                  <button style={{"backgroundColor":"#E4A11B"}}type="button" class="btn btn-outline-primary me-1 flex-grow-1 text-black" >
                   Patrulla
                  </button>
                  <button  style={{"backgroundColor":"#B71C1C"}}type="button" class="btn btn-primary flex-grow-1 text-light">
                    Olvidar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        
    );
}

export default Alerta;