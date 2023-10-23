import React from "react";
import ojito from "../imagenes/ojito.png";


function Helpcenter(){
    return(
        <div className='Centrico' px-1>
            <div class="card" style={{width: "100vw"}}>
                <img src={ojito} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">CENTRO DE AYUDA</h5>
                        <p class="card-text">Tienes un problema?</p>
                        <p class="card-text">Si tienes algun problema puedes describirlo aqui te ayudaremos a resolverlo no olvides que nuestro equipo trabaja por tu seguridad bajo la politica de privacidad </p>
                </div>
                <div class="card-body">

                    <a href="/Next" class="card-link">Continuar</a>
                </div>
            </div>

        </div>

    )

}

export default Helpcenter;