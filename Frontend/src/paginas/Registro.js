import React from 'react';


function Registro () {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5">
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h2 className="fw-bold mb-2">Mov Security</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1m">Primer nombre</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1n">Apellido</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1m1">Direccion</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1n1">Celular</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="pasword" id="form3Example8" className="form-control form-control-lg" />
                    <label type="pasword" className="form-label" htmlFor="form3Example8">Contraseña</label>
                  </div>

                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                    <h6 className="mb-0 me-4">Genero: </h6>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="option1" />
                      <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                    </div>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                        value="option2" />
                      <label className="form-check-label" htmlFor="maleGender">Masculino</label>
                    </div>

                    

                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">

                      <select className="select">
                        <option value="1">Departamento</option>
                        <option value="2">Antioquia</option>
                        <option value="3">Cundinamarca</option>
                        <option value="4">Valle del cauca</option>
                      </select>

                    </div>
                    <div className="col-md-6 mb-4">

                      <select className="select">
                        <option value="1">Ciudad</option>
                        <option value="2">Medellin</option>
                        <option value="3">Bogota</option>
                        <option value="4">Cali</option>
                      </select>

                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example9" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example9">Correo electronico</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example90" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example90">Correo de recuperacion</label>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
             
                    <a type="button" className="btn btn-light btn-lg" href='/Login'>Iniciar </a>
                    <a type="button" className="btn btn-warning btn-lg ms-2" href='/Pago'>Continuar</a>
                  </div>

                </div>
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  

export default Registro;
