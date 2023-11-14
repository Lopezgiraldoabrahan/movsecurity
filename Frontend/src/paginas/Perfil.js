import React from 'react';
import Nav from '../componentes/nav';
import { Link } from "react-router-dom";




// style={{"width": "180px", "border-radius": "10px"}}
function Perfil () {
  
  return (

    
    <section  >
      <Nav />
      
      <div className="container py-3"  >
        <div className="card shadow">
          <div className="row">
          
            <div className="col">
              
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4" id='ejemploo'>
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: '150px' }}/>
                <h5 className="my-3">Santiago Cortés</h5>
                <p className="text-muted mb-1">Erick Santiago Sepúlveda Cortés</p>
                <p className="text-muted mb-4"></p>
                <div className="d-flex justify-content-center mb-2">
                  
                  <button type="button" className="btn btn-outline-primary ms-1">
                    <Link style={{textDecoration: 'none'}} to="/pago">
                    Editar plan
                  </Link>
                  </button>
                  
                  <button type="button" className="btn btn-outline-primary ms-1" >
                  <Link style={{textDecoration: 'none'}} to="/">
                    Cerrar Sesion
                  </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className= "mb-0">Contactanos! </p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">https://MovSecurity.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0">@MovSecurity</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <p className="mb-0">Planes extras</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                    <p className="mb-0">Buzon de sugerencias</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Erick Cortes</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Erick@Ejemplo.com</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Telefono De emergencia</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Ubicación</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Lusitania,Medellin,COL</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Actividad</span> Semana
                    </p>
                    <p className="mb-1" style={{ 'fontSize': '.77rem' }}>Lunes</p>
                    <div className="progress rounded" style={{ height: '5px;' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mb-1" style={{ 'fontSize': '.77rem' }}>Martes</p>
                    <div className="progress rounded" style={{ height: '5px;' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem;' }}>Miercoles</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Jueves</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'font-size': '.77rem;' }}>Vienes</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem;' }}>Sabado</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'font-size': '.77rem' }}>Domingo</p>
                    <div className="progress rounded mb-2" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Actividad</span> Este año
                    </p>
                    <p className="mb-1" style={{ 'fontSize': '.77rem' }}>Enero</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Febrero</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Marzo</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Abril</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem;' }}>Junio</p>
                    <div className="progress rounded mb-2" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Julio</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Agosto</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ 'fontSize': '.77rem' }}>Septiembre</p>
                    <div className="progress rounded" style={{ height: '5px' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
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

export default Perfil;
