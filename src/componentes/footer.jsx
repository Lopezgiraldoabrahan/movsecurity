import React from 'react';

function Footer(){
  return(
    
    <footer className="text-center text-lg-start bg-white text-muted">

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        
        
       
    
      
        <div>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>
      
      </section>
    
    
      <section className="">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Mov Security
              </h6>
              <p>
                panpanpan panpanpanpan pna pan pannanan pana pnaa pan oan patacon con queso
              </p>
            </div>
        
    
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Planes
              </h6>
              <p>
                <a href="/Pago" className="text-reset">Plan Personal</a>
              </p>
              <p>
                <a href="/Pago" className="text-reset">Plan Familiar</a>
              </p>
              <p>
                <a href="/Pago" className="text-reset">Plan De negocio</a>
              </p>
              <p>
                <a href="/Pago" className="text-reset">Personalizado</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Links
              </h6>
              <p>
                <a href="#!" className="text-reset">Precios</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Configuraciones</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Reglas</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Ayuda</a>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i> Medellin-Colombia </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                MovSoporte@example.com
              </p>
              <p><i className="fas fa-phone me-3 text-secondary"></i> + 57 314 414 314</p>
              <p><i className="fas fa-print me-3 text-secondary"></i> + 57 313 313 131</p>
            </div>
            
          </div>
         
        </div>
      </section>
     
    
     
      <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MovSecurity.com</a>
      </div>
      
    </footer>
   
  );
}
export default Footer;