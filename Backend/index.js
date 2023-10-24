const express = require('express');
const app = express();
const cors = require('cors');
const usuarios = require('./routes/usuarios');

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))
app.set('port' ,process.env.PORT || 4001);

app.use(express.json());


//rutas
app.use('/api/usuarios',usuarios);


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});