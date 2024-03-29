var mysql = require('mysql')
require('dotenv').config({path: __dirname + '/.env'})


var con = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: '3306',
  database: 'calendar_test'
})

module.exports = con