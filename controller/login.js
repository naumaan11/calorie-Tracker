const express = require('express');
const mysql = require('mysql2')
const router = express.Router();
const connection = require('../db')
const con = connection.getConnection();

router.get('/', (req,res)=>{
 con.query('select * from login', (err,array)=>{
     if(err){
        throw err     }
     else{
         res.send(array)
     }
 })
});

router.get('/id', (req,res)=>{
    con.query('select id from login')
})

router.post('/', (req,res)=>{
 var id = req.body.id;
 var name =  req.body.name;
 var password =  req.body.password;
 var email =  req.body.email;
  var query =`insert into login (name,password) values ("${name}","${password}")`
 con.query(query, (err,data)=>{
     if(err) {
        throw err     }
     else {
         res.send(data)
     }
        })
})

module.exports = router;