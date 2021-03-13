const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const cors = require('cors')

const login = require('./controller/login');
const foodMaster = require('./controller/foodMaster')
const waterMaster = require('./controller/waterMaster')
const connection = require('./db')
const con = connection.getConnection();

con.connect((err)=> {
if(err) throw err;
})
app.use(bodyParser.json());
app.use(cors())
app.use(login);
app.use('/',foodMaster)
app.use('/',waterMaster)

app.listen(port, (err)=>{
    if (err) throw err
})