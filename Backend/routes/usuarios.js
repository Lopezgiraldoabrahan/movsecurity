const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/all_users', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
            console.log('Estamos melos')
        }else {
            console.log(err);
        }
    });
});

router.post('/registrar', (req, res)=>{
    const { tipo_usuario, documento, nombre, apellidos, correo, contraseña, telefono, estado} = req.body;
  
    let usuario = [ tipo_usuario, documento, nombre, apellidos, correo, contraseña, telefono, estado];
  
    let nuevoUsuario = `INSERT INTO usuarios( tipo_usuario, documento, nombre, apellidos, correo, contraseña, telefono, estado) 
    VALUES( ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;