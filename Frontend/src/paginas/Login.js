import React, { useState } from "react";
import Inicio from '../paginas/Inicio';
// cambiar contendio por query


const usuarioDeLaBaseDeDatos = {
  nombreDeUsuario: 'erick@mail.com',
  contrasenia: 'pan'
};

/**
 * Un hook personalizado para encapsular la logica
 * y separarla de la presentacion.
 * React requiere que todos los hooks personalizados
 * empiezen con el prefijo use.
*/
function useLogin() {
  const [estoyAutorizado, establecerEstoyAutorizado] = useState(false);
  const [nombreDeUsuario, establecerNombreDeUsuario] = useState('');
  const [contrasenia, establecerContrasenia] = useState('');

  function iniciarSesion(e) {
    e.preventDefault();

    const noIntrodujoNombreDeUsuario = nombreDeUsuario.length === 0;
    const noIntrodujoContrasenia = contrasenia.length === 0;

    if (noIntrodujoNombreDeUsuario || noIntrodujoContrasenia) {
      alert('Complete Los Datos Faltantes porfa');
      return;
    }

    // El contenido de este if se tiene que cambiar a query para ir a  solucitar a la base de datos!!
    if (nombreDeUsuario === usuarioDeLaBaseDeDatos.nombreDeUsuario && contrasenia === usuarioDeLaBaseDeDatos.contrasenia) {
      establecerEstoyAutorizado(true);
      document.getElementById('form_login').style.display = 'none';
    } else {
      establecerEstoyAutorizado(false);
      alert('Error de usuario o contraseña');
      document.getElementById('nombreDeUsuario').value = '';
      document.getElementById('contrasenia').value = '';
    }
  }

  return {
    events: {
      iniciarSesion
    },
    state: {
      nombreDeUsuario,
      contrasenia,
      estoyAutorizado,
      establecerContrasenia,
      establecerNombreDeUsuario,
      establecerEstoyAutorizado
    }
  };

}

export const Login = () => {
  const { events, state } = useLogin();

  

  return (
    <section className="vh-100 gradient-custom">
      {!state.estoyAutorizado &&
        (
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow" style={{ borderRadius: '1rem' }}>
                  <div className="card-body p-5">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <form onSubmit={events.iniciarSesion} id='form_login'>
                        <h2 className="fw-bold mb-2">Login</h2>
                        <p className=" mb-5">Please enter your login and password!</p>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="nombreDeUsuario">Usuario</label>
                          <input type="email" id="nombreDeUsuario" name="nombreDeUsuario" className="form-control" onChange={(e) => state.establecerNombreDeUsuario(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="contrasenia">Contraseña</label>
                          <input type="password" id="contrasenia" name="contrasenia" className="form-control" onChange={(e) => state.establecerContrasenia(e.target.value)} />
                        </div>
                        <p className="small mb-5 pb-lg-2">
                          <a className="" href="#!">Olvidaste la Contraseña?</a>
                        </p>
                        <button className="btn btn-primary px-5" type="submit">Entrar</button>
                      </form>
                    </div>
                    <div>
                      <p className="mb-0 d-flex align-items-center">
                                       No tienes una cuenta?
                        <a href="/Registro" className="fw-bold d-inline-block ms-2 p-0">Registrarse</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {state.estoyAutorizado && <Inicio />}
    </section>
  );
};

export default Login;
