const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer();
const app = express();
const fetch = require("node-fetch");

app.use(bodyParser.urlencoded({extended: true})) //add user submitted data onto req object
app.use(bodyParser.json())

app.use(upload.array());

const router = require('./router') //connects to router file

app.use(express.static('public')) // this was needed to hook up the public/css folder!
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router) //this is needed to connect the routher file

app.listen(3000);
