import React from 'react'; 

import Centro from '../paginas/Centro';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.css';
import Inicio from '../paginas/Inicio';
import Perfil from '../paginas/Perfil';
import Alerta from '../paginas/Alerta';
import Grabacion from '../paginas/Grabacion';
import Registro from '../paginas/Registro';
import Login from '../paginas/Login';
import Help from '../paginas/Help';
import Next from '../componentes/Next';
import Camaras from '../componentes/Camaras';
import Pago from '../paginas/Pago';
import Videollamada from '../paginas/videollamada';


function App () {
  return (
    <Router>
      <Routes>

        <Route exact path='/Inicio' element={<Inicio/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/centro' element={<Centro/>}/>
        <Route exact path='/Help' element={<Help/>}/>
        <Route exact path='/Next' element={<Next/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/alerta' element={<Alerta/>}/>
        <Route exact path='/grabacion' element={<Grabacion/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/Camaras' element={<Camaras/>}/>
        <Route exact path='/pago' element={<Pago/>}/>
        <Route exact path='/VideoLlamada' element={<Videollamada/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
