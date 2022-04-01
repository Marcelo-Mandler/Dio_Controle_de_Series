const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'series_control'  
})

module.exports = Connection;