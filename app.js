const express = require('express');
const session = require('express-session');
const app = express();
var path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');


const bodyParser = require("body-parser");
const cors = require('cors')

require("dotenv").config()

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "client/build")))

const User = require("./models/user")

// User.register({ username: 'a', active: false }, 'a');
// User.register({ username: 'starbuck', active: false }, 'redeye');

// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.urlencoded({ extended: false }));
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(passport.initialize());
app.use(passport.session());


const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res){
  console.log("req : ", req);

  // res.send("hello")
  return res.sendFile(path.join(__dirname, "/client/build/index.html"))
});

app.get('/home', passport.authenticate('local', { failureRedirect: '/' }), function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.send("you are now authenticated")
  
})

app.post('/login',passport.authenticate('local', { failureRedirect: '/' }), function(req, res){
  // res.set('Access-Control-Allow-Origin', '*');
  // res.redirect("/home")
    // res.sendFile("Hello from the root application URL");
  res.send({
    "success" : true
  })
});

// app.get('/mycoolapp/test/', function(req, res){
//     res.send("Hello from the 'test' URL");
// });

app.listen(8000, () => console.log('Application is running'));