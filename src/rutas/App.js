import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import Perfil from '../paginas/Perfil';
import Alerta from '../paginas/Alerta';
import Grabacion from '../paginas/Grabacion';
import Registro from '../paginas/Registro';
import Login from '../paginas/Login';
import Camaras from '../componentes/Camaras';
import Pago from '../paginas/Pago';

function App () {
  return (
    <Router>
      <Routes>

        <Route exact path='Inicio' element={<Inicio/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/alerta' element={<Alerta/>}/>
        <Route exact path='/grabacion' element={<Grabacion/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/Camaras' element={<Camaras/>}/>
        <Route exact path='/pago' element={<Pago/>}/>
        
       

      </Routes>
    </Router>
  );
}

export default App;
