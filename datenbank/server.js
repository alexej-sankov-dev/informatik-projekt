const express = require('express');
var cors = require('cors')
const server = express();
var fs = require("fs");
let data = require('./data');
let userdata = require('./user');

server.use(cors())

const body_parser = require('body-parser');

const port = 4000;

function loadData() {
   fs.readFile('./user1.json', 'utf8', (err, userdata) => {
      if (err) {
          console.log("File read failed:", err)
          return
      }
  })
};

function saveData(jsonObj) {
   fs.writeFile("./user1.json", JSON.stringify(jsonObj), (err) => {
      if (err) {
          console.error(err);
          return;
      };
  });
}

server.use(body_parser.json());

server.get("/items", (req, res) => {
   const id = Math.floor(Math.random() * data.length);      
   res.json("data[id]");
});

server.get("/2items", (req, res) => {
   var cities = {}     
   
   const id = Math.floor(Math.random() * data.length);
   
   var id2 = Math.floor(Math.random() * data.length);

   while(id==id2) {
      id2 = Math.floor(Math.random() * data.length);  
   }

   cities[0] = data[id]
   cities[1] = data[id2]
   res.json(cities);
});

server.get("/user/signIn", (req, res) => {
   loadData()
   const userId = req.query.userId
   var checkUserExists = userdata.hasOwnProperty(userId)
   if(checkUserExists == true) {
      res.json({...userdata[userId], new: false})
   } else {
      newUser = {"userId" : userId, "username" : null, "highscore" : 0}
      userdata[userId]=newUser
      res.json({...newUser, new: true});
      saveData(userdata)
   }

});

server.put("/user/setUserData", (req, res) => {
   var username = req.body.username
   var userId = req.body.userId
   console.log("username: "+username)
   console.log("userId: "+userId)
   loadData()

  if(!userdata.hasOwnProperty(userId)) {
      res.json({"message": "user not existing with this id"})
      console.log('error')
  } else {
      userdata[userId].username = username
      saveData(userdata)
      res.json(userdata[userId])
      console.log('should be updated')
  }
});

server.put("/user/updateHighScore", (req, res) => {
   var highscore = req.body.highscore
   var userId = req.body.userId

   loadData()

   userdata[userId].highscore = highscore

   saveData(userdata)
   res.json(userdata[userId]);
});

server.get("/updateHighScore", (req, res) => {
   var highscore = req.body.highscore
   var userId = req.body.userId

   loadData()

   userdata[userId].highscore = highscore

   saveData(userdata)
   res.json("data[id]");
});





server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});

