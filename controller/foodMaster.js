const express = require('express');
const mysql = require('mysql2')
const router = express.Router();
const connection = require('../db')
const con = connection.getConnection();

router.get('/foodList', (req,res)=>{
 con.query('select * from foodmaster', (err,data)=>{
     if(err){
        throw err     }
     else{
         res.send(data)
     }
 })
});

router.get('/breakfast', (req,res)=>{
 con.query('select * from breakfast', (err,data)=>{
     if(err){
         throw err
     }
     else{
         res.send(data)
     }
 })
});

router.post('/breakfast', (req,res) => {
    var id = req.body.id;
    var foodName =  req.body.foodName;
  var query =`insert into breakfast (foodName) values ("${foodName}")`
 con.query(query, (err,data)=>{
     if(err) {
         throw err
     }
     else {
         res.send(data)
     }
        })
})

module.exports = router;