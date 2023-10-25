import React, {useState} from 'react';
import axios from 'axios';
import Inicio from './Inicio/';


function Registro () {
  const [miRegistro, setMiregistro]=useState("false");
  
  function iniciarSesion(e){
    e.preventDefault();
    var txtNombre=document.getElementById("txtNombre").value;
    var txtApellido=document.getElementById("txtApellido").value;
    var txtIdentificacion=document.getElementById("txtIdentificacion").value;
    var txtTelefono=document.getElementById("txtTelefono").value;
    var txtCorreo=document.getElementById("txtCorreo").value;
    var txtContraseña=document.getElementById("txtContraseña").value;
    
    if(txtNombre.length===0 || txtApellido.length===0 ||txtIdentificacion.length===0||txtTelefono.length===0 || txtContraseña.length===0||txtCorreo.length===0){
    alert("No puedes dejar campos sin llenar");

  }
  if(txtContraseña !==txtContraseña){
    alert("Las contraseñas N")
  }
  else{
    var res=peticionPost(txtNombre,txtApellido,txtIdentificacion,txtTelefono,txtCorreo,txtContraseña)
    console.log("res-->",res)
  }
}

async function peticionPost(txtNombre,txtApellido,txtIdentificacion,txtTelefono,txtCorreo,txtContraseña){
  await axios.post('http://localhost:4001/api/usuarios/registro',[txtNombre,txtApellido,txtIdentificacion,txtTelefono,txtCorreo,txtContraseña])
  .then(response=>{
    if(response){
      setMiregistro("true");
      alert("bienvenido")
      document.getElementById("registroform").style.display="none";
    }
    else{
      setMiregistro("false");
      alert("Hay un error en alguno de los campos");
      document.getElementById("txtNombre").value= "";
      document.getElementById("txtApellido").value="";
      document.getElementById("txtIdentificacion").value="";
      document.getElementById("txtTelefono").value="";
      document.getElementById("txtCorreo").value="";
      document.getElementById("txtContraseña").value="";
      document.getElementById("txtNombre").focus();
    }
 }).catch(error=>{
  console.log(error.message);
 })
}



  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100" id='registroform'>
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5">
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h2 className="fw-bold mb-2">Mov Security</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="txtNombre" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1m">Nombre</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="txtApellido" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1n">Apellidos</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="txtIdentificacion" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1m1">Numero de identificacion</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="txtTelefono" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1n1">Telefono</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="pasword" id="txtContraseña" className="form-control form-control-lg" />
                    <label type="pasword" className="form-label" htmlFor="form3Example8">Contraseña</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="txtCorreo" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example9">Correo electronico</label>
                  </div>

                  <div className="d-flex justify-content-end pt-3">
                    <a type="button" className="btn btn-light btn-lg" href='/Login'>Iniciar </a>
                    <button type="button" className="btn btn-warning btn-lg ms-2" href='/Pago' onClick={iniciarSesion}>Registrarme</button>
                  </div>

                </div>
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
      {miRegistro==="true"&& <Inicio/>}
    </div>
    
  );
}

  

export default Registro;
