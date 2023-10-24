import React from 'react';
<<<<<<< HEAD
import Menu from '../componentes/menu';
import Encabezado from '../componentes/Encabezado';
import Productos from '../componentes/Pie';
import vista from '../imagenes/vista.jpg';
import humano from '../imagenes/humano.png';
import seguridad from '../imagenes/seguridad.jpg';
import '../Estilos/styles.css';



function Inicio() {
    return(
        <div className='Inicio px-2'>
           <Menu/>
            <Encabezado/>
           <Productos/>
           <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={vista} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={humano} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={seguridad}class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>


    );
=======
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
>>>>>>> origin/abrahan2
}
export default Inicio;
