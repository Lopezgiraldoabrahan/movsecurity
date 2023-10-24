import React from 'react';
import alerta from '../imagenes/alerta.png';

// style={{"width": "180px", "border-radius": "10px"}}
function Alerta () {
  return (
    <section style={{ backgroundColor : '#546E7A' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="card p-3" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0 m-3">
                <div className="d-flex text-black">
                  <div className="flex-shrink-5">
                    <img src={alerta}
                      alt="Generic placeholder image" className="img-fluid"
                      style={{ width: '180px', 'border-radius': '10px' }} />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Alerta!!</h5>
                    <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                ¡¡HEMOS DETECTADO UN MOVIMIENTO INUSUAL!!
                    </p>

                    <div className="d-flex pt-1">
                      <button style={{ backgroundColor: '#FFEA00' }}type="button" className="btn btn-outline-primary me-1 flex-grow-1 text-black" >
                   Revisar
                      </button>
                      <button style={{ backgroundColor: '#B71C1C' }}type="button" className="btn btn-primary flex-grow-1 text-light">
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
