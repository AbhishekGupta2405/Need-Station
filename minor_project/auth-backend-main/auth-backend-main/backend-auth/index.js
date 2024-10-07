const express = require('express');
const  connectToMongo = require('./db/connection.js');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const bycrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const authRouter = require('./routers/authentication.js');
//const loginRouter =require('./routers/login.js')
const cookieparser = require("cookie-parser");

const app = express();
const port = 8080;

connectToMongo();

app.use(bodyParser.json());
app.use(cookieparser());
app.use(express.json());
app.use(cors());
app.use('/',authRouter);

app.get('/me',(req,res)=>{
    res.send("pong");
}); 

app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`);
})
