const express = require('express');
const app = express();
const cors = require('cors');
const usuarios = require('./routes/usuarios');

app.use(cors({origin: '*'}));

app.set('port',process.env.PORT||4001);
app.use('/api/registro',routes)

app-listen(app.get('port'),()=>{
   console.log(`Server on port ${app.get('port')}`); 
});