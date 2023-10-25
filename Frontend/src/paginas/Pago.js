/* eslint-disable jsx-a11y/alt-text */
import React from 'react';





function Pago(){
  return(
    <section style={{backgroundColor: '#eee'}}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div className="card">
              <div className="card-body p-md-5">
                <h2> <a href='/Login'>Mov Security</a></h2>
                
                <div>
                  <h6> Seleciona tu plan</h6>
                  <p className="text-muted pb-2">
                Selecina el plan que mejor se adapte a tus necesidades tambien puedes acceder al Personalizado por si no encuentras el plan ideal
                  </p>
                </div>
                <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2012/04/18/00/07/silhouette-of-a-man-36181_1280.png" className="rounded" width="60" />
                    <div className="d-flex flex-column ms-4">
                      <span  className="h5 mb-1">Plan personal</span>
                      <span className="small text-muted">Mas informacion</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <sup className="dollar font-weight-bold text-muted">$</sup>
                    <span className="h2 mx-1 mb-0">8,350</span>
                    <span className="text-muted font-weight-bold mt-2">Al año</span>
                  </div>
                </div>
                <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://img.freepik.com/vector-premium/silueta-padre-madre-hijo-vector-ilustracion-familia_186380-2597.jpg" className="rounded" width="60" />
                    <div className="d-flex flex-column ms-4">
                      <span  className="h5 mb-1">Plan Familiar</span>
                      <span className="small text-muted">Mas informacion</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <sup className="dollar font-weight-bold text-muted">$</sup>
                    <span className="h2 mx-1 mb-0">8,350</span>
                    <span className="text-muted font-weight-bold mt-2">/ al año</span>
                  </div>
                </div>
                <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://previews.123rf.com/images/stockgiu/stockgiu1803/stockgiu180300770/96599905-silueta-negocio-tienda-venta-moderna-boutique-ilustraci%C3%B3n-vectorial.jpg" className="rounded" width="60" />
                    <div className="d-flex flex-column ms-4">
                      <span  className="h5 mb-1">Plan de negocio</span>
                      <span className="small text-muted">Mas informacion</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <sup className="dollar font-weight-bold text-muted">$</sup>
                    <span className="h2 mx-1 mb-0">8,350</span>
                    <span className="text-muted font-weight-bold mt-2">/ Al año</span>
                  </div>
                </div>


                <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/21/21975.png" className="rounded" width="60" />
                    <div className="d-flex flex-column ms-4">
                      <span  className="h5 mb-1">Plan Personalizado</span>
                      <span className="small text-muted">Mas informacion</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <sup className="dollar font-weight-bold text-muted">$</sup>
                    <span className="h2 mx-1 mb-0">8,350</span>
                    <span className="text-muted font-weight-bold mt-2">/ Al año</span>
                  </div>
                </div>

                <h4 className="mt-5">Detalles del pago</h4>

                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://i.imgur.com/qHX7vY1.webp" className="rounded" width="70" />
                    <div className="d-flex flex-column ms-3">
                      <span className="h5 mb-1">Trajeta de credito</span>
                      <span className="small text-muted">1234 XXXX XXXX 2570</span>
                    </div>
                  </div>
                  <div>
                    <input type="text" className="form-control" placeholder="CVC" style={{width: '70px'}} />
                  </div>
                </div>

                <div className="mt-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    <img src="https://i.imgur.com/qHX7vY1.webp" className="rounded" width="70" />
                    <div className="d-flex flex-column ms-3">
                      <span className="h5 mb-1">Bancolombia</span>
                      <span className="small text-muted">2344 XXXX XXXX 8880</span>
                    </div>
                  </div>
                  <div>
                    <input type="text" className="form-control" placeholder="CVC" style={{width: '70px'}} />
                  </div>
                </div>

                <h6 className="mt-4 mb-3 text-primary text-uppercase">Añadidir metodo de pago</h6>

                <div className="form-outline">
                  <input type="text" id="formControlLg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="formControlLg">Email </label>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary btn-block btn-lg">
                Proceder al pago <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}
export default Pago;
 