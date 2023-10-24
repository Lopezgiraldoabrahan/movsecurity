import React from 'react';
import Nav from '../componentes/nav';


function Login () {
  
  return (
   
    <section >
      <div className='nav'>
        <Nav/>
      </div>



      <div className="container py-5">
        <div className="card">
          <div className="  Card-rec">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div className="bg-white rounded shadow-sm">
                <img src="https://static.vecteezy.com/system/resources/previews/001/919/744/non_2x/camera-view-finder-user-interface-free-vector.jpg" alt="" className="img-fluid card-img-top"/>
                
              </div>
            </div>
          </div>
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
