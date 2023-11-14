import React from 'react';
import { BsFillBrightnessHighFill } from 'react-icons/bs';
 


function Nav(){
  function ModoOscuro(){
    document.querySelector("body").setAttribute("data-bs-theme", "dark")
    document.querySelector("nav").setAttribute("data-bs-theme", "dark")
    document.querySelector("#ejemploo").setAttribute("data-bs-theme", "dark")
    
  }
 
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/Inicio">Mov Security</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Inicio">Menu inicial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Archivos</a>
            </li>
            <li className="nav-item">
               < BsFillBrightnessHighFill onClick={ModoOscuro}/>
            </li>
            
            

          
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Help" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sugerencias y quejas
              </a>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" type='text' href="/Help">Dejar una sugerencia</p></li>
                <li><a className="dropdown-item" type='text' href="/Help">Dejar una quejas</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/Help">Entrar al soporte</a></li>
              </ul>
            </li>    
          </ul>

         
          

          <ul>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link d-sm-flex align-items-sm-center" href="/Perfil">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
                  height="30"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <strong className="d-none d-sm-block  lg-1  ms-1">Erick</strong>
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}



export default Nav;