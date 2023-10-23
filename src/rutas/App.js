import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Centro from '../paginas/Centro';
import Inicio from '../paginas/Inicio';
import Login from '../paginas/Login';
import Help from '../paginas/Help';
import Ayuda from '../paginas/Help';
import Next from '../componentes/Next';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/centro' element={<Centro/>}/>
        <Route exact path='/Ayuda' element={<Ayuda/>}/>
        <Route exact path='/Next' element={<Next/>}/>


      </Routes>
    </Router>
  );
}

export default App;
