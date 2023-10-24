const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bttw6yipqbq3qhfb73tx-mysql.services.clever-cloud.com',
    user: 'ux2reahsrkt58rvs',
    password: 'Wh7mLm2tTcVCo4hS1nCG',
    database: 'bttw6yipqbq3qhfb73tx',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;