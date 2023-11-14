import React from 'react';
import Footer from '../componentes/footer';
import Camaras from '../componentes/Camaras';
import Nav from '../componentes/nav';







function Inicio () {
  return (
    <div className='Inicio'>
      <Nav/>
      <hr/>
      <Camaras/>
     

      <Footer/>
    </div>
  );
}
export default Inicio;
