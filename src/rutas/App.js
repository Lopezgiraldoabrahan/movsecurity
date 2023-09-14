import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import Login from '../paginas/Login';
import Perfil from '../paginas/Perfil';
import Alerta from '../paginas/Alerta';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/alerta' element={<Alerta/>}/>

      </Routes>
    </Router>
  );
}

export default App;
