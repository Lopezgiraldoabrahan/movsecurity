import React from "react";


// style={{"width": "180px", "border-radius": "10px"}}
function Perfil() {
    return(
      <section style={{"background-color": "#BBDEFB"}}>
        <div class="container py-5">
          <div class="row">
            <div class="col">
              <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                  <li class="breadcrumb-item"><a href="#">Usuario</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Perfil</li>
                </ol>
              </nav>
            </div>
          </div>
      
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    class="rounded-circle img-fluid" style={{"width": "150px"}}/>
                  <h5 class="my-3">Santiago Cortés</h5>
                  <p class="text-muted mb-1">Erick Santiago Sepúlveda Cortés</p>
                  <p class="text-muted mb-4"></p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">Editar perfil</button>
                    <button type="button" class="btn btn-outline-primary ms-1">Editar info</button>
                  </div>
                </div>
              </div>
              <div class="card mb-4 mb-lg-0">
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush rounded-3">
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fas fa-globe fa-lg text-warning"></i>
                      <p class= "mb-0">Contactanos! </p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-github fa-lg" style={{"color": "#333333"}}></i>
                      <p class="mb-0">https://MovSecurity.com</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-twitter fa-lg" style={{"color": "#55acee"}}></i>
                      <p class="mb-0">@MovSecurity</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-instagram fa-lg" style={{"color": "#ac2bac"}}></i>
                      <p class="mb-0">Planes extras</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i class="fab fa-facebook-f fa-lg" style={{"color": "#3b5998"}}></i>
                      <p class="mb-0">Buzon de sugerencias</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Nombre completo</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Erick Cortes</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Erick@Ejemplo.com</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Telefono De emergencia</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Ubicación</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">Lusitania,Medellin,COL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4"><span class="text-primary font-italic me-1">Actividad</span> Semana
                      </p>
                      <p class="mb-1" style={{"font-size": ".77rem"}}>Lunes</p>
                      <div class="progress rounded" style={{"height": "5px;"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mb-1" style={{"font-size": ".77rem"}}>Martes</p>
                      <div class="progress rounded" style={{"height": "5px;"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem;"}}>Miercoles</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "72%"}} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Jueves</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "89%"}} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem;"}}>Vienes</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem;"}}>Sabado</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "72%"}} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Domingo</p>
                      <div class="progress rounded mb-2" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "66%"}} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4 mb-md-0">
                    <div class="card-body">
                      <p class="mb-4"><span class="text-primary font-italic me-1">Actividad</span> Semanal
                      </p>
                      <p class="mb-1" style={{"font-size": ".77rem"}}>Enero</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Febrero</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "72%"}} aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Marzo</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "66%"}} aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Abril</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem;"}}>Junio</p>
                      <div class="progress rounded mb-2" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "89%"}} aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Julio</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Agosto</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p class="mt-4 mb-1" style={{"font-size": ".77rem"}}>Septiembre</p>
                      <div class="progress rounded" style={{"height": "5px"}}>
                        <div class="progress-bar" role="progressbar" style={{"width": "55%"}} aria-valuenow="55"
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