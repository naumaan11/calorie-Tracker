const express = require('express');
const mysql = require('mysql2')
const router = express.Router();
const connection = require('../db')
const con = connection.getConnection();

router.get('/getWater', (req,res)=>{
 con.query('select * from waterTrack', (err,data)=>{
     if(err){
        throw err     }
     else{
         res.send(data)
     }
 })
});

router.post('/water', (req,res) => {

    var id = req.body.id;
    var waterGlass =  req.body.waterGlass;
 
  var query =`insert into waterTrack (waterGlass) values (${waterGlass})`
 con.query(query, (err,data)=>{
     if(err) {
        throw err     }
     else {
         res.send(data)
     }
        })
})
module.exports = router