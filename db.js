var mysql = require('mysql2');
var conDetails = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'urbanfit'
}
 var getConnection = ()=>{
    return mysql.createConnection(conDetails)
 }

module.exports = { getConnection }