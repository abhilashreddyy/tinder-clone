const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors")
const connection = require("./models/db.js")
const auth = require("./models/auth.js")
const app = express()
const port = process.env.PORT || 8000

connection.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())

app.post("/login", async (req, res, next)=>{
  console.log(req.body)
  authInfo = await auth.authenticate(req.body.username, req.body.password)
  console.log(authInfo)
  res.send(authInfo)
})


app.post("/register", async (req, res, next)=>{
  console.log(req.body)
  registrationInfo = await auth.register(req.body)
  console.log(req.body, registrationInfo)
  res.send(true)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})