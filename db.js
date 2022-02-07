const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todoapp',
    password: 'priya25102002',
    database: 'todoapp'
})