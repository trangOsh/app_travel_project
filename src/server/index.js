const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require("express");
const bodyParser = require('body-parser');

const api= process.env.API_KEY;
console.log('Api', api)
console.log("hello",process.env.API_KEY)
// create app
const app = express();

// body parse as middle ware
app.use(bodyParser.urlencoded({extented: false}));
app.use(bodyParser.json());



// cors for cross origin allowance

const cors = require('cors');

app.use(cors());
//app.use(express.static('dist'))
//console.log("dirname0",__dirname)

app.get('/', function(req, res){
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const port= 5005;
app.listen(port, function(){
    console.log(`app listening to ${port}`)
}) 

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})