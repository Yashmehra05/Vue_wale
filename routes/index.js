var express = require('express');
var router = express.Router();
const UM = require("./users");
const PM = require("./posts");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cu',async function(req, res, next) {
let createdUser= await UM.create({
    username: "Yash",
    password: "Kirash",
    posts: [],
    email: "mehrayuash678@gmail.com",
    fullName: "yeahboy",
  });
  res.send(createdUser);
 
});


router.get('/cp',async function(req, res, next) {
  let createdPost= await PM.create({
     postText: "yo yo"
    });
    res.send(createdPost);
  });
module.exports = router;
