// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// var logger = require('morgan');
// const cors = require('cors')
// const connection = require("./db")
// connection();
// // var indexRouter = require('./build/index.html');
// // var usersRouter = require('./routes/users');
// var app = express();
// app.use(bodyParser.urlencoded({extended: false}));
// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(cors)

// const port = process.env.PORT;

// app.get('/api', function(req, res) {
  
//   // res.sendFile(path.join(__dirname, '/build/index.html'));
//   res.json({message : "hello world from server"})
// });

// app.post("/login", (req, res, next)=>{
//   console.log("reacheddddd", req)
//   res.send("successssss")
// })

// app.get("/login", (req, res, next)=>{
//   console.log("reacheddddd : ", req)
//   res.send("successssss")
// })


// app.listen(port, () =>{
//   console.log(`listening on ${port}`);
// });



const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors")
const connection = require("./models/db.js")
const auth = require("./models/auth.js")
const app = express()
const port = process.env.PORT || 8000

connection();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())

app.post("/login", (req, res, next)=>{
  authInfo = auth.authenticate(req.body.username, req.body.password)
  res.send(authInfo)
})


app.post("/register", (req, res, next)=>{
  res.send(true)
})

// app.get("/", (req, res)=>{
//   res.send("this is home page")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})