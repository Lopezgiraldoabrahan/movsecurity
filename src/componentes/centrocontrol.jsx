import React from 'react';
import ojito from '../imagenes/ojito.png';

function Centrocontrol() {
    return (
        <div>
            <div class="card" style={{width: "100vw"}}>
                <img src={ojito} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">CENTRO DE CONTROL</h5>
                    <p class="card-text">Aqui tienes a tu disposicion el control de tus lugares y de tus cuentas.</p>
                </div>
                <div class="row">
                    <div class=" col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">TUS LUGARES</h5>
                                <p class="card-text">Desde aqui puedes acceder a tus lugares y interactuar con ellos.</p>
                                <a href="#" class="btn btn-primary">Ir a tus lugares</a>
                            </div>
                        </div>
                    </div>
                    <div class=" col-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">TUS CUENTAS</h5>
                                <p class="card-text">Desde aqui puedes acceder a tus cuentas y interactuar con ellas.</p>
                                <a href="#" class="btn btn-primary">Ir a tus cuentas</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>
    )

}

export default Centrocontrol;