import React from 'react';
import Nav from '../componentes/nav';
import Videollamada from './videollamada';


function Login () {
  
  return (
   
    <section >
      <div className='nav'>
        <Nav/>
      </div>



      <div className="container py-5">
        <div className="card">
          <Videollamada/>
          <div className="card-body" >
            <h5 className="card-title"></h5>
            <hr></hr>
            <div className="d-flex pt-1">
              <button style={{ backgroundColor: '#B71C1C' }}type="button" className="btn btn-primary flex-grow-1 text-light">
                CALL POLICE
              </button>
              <button style={{ backgroundColor: '#FFCA28' }}type="button" className="btn btn-primary flex-grow-1 text-light">
              Alerta
              </button>
              <button type="button" className="btn btn-primary flex-grow-1 text-light">
                ignorar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
