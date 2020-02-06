const express = require('express');
var cors = require('cors')
const server = express();
let data = require('./data');

server.use(cors())

const body_parser = require('body-parser');

const port = 4000;

// parse JSON (application/json content-type)
server.use(body_parser.json());



server.get("/items", (req, res) => {
   const id = Math.floor(Math.random() * data.length);      
   res.json(data[id]);
});

server.get("/2items", (req, res) => {
   var cities = {}     
   /*
   const id = Math.floor(Math.random() * data.length);
   cities[0] = data[id]
   //res.json(data[id]);

   const id2 = Math.floor(Math.random() * data.length);      //id1 muss noch =/= id2
   cities[1] = data[id2]
   */

   cities[0] = data[0]
   cities[1] = data[1]
   res.json(cities);
});

server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});

