const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserForm = require("./models/userform");
app.use(express.static("Views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://localhost/myBBQDB", {useNewUrlParser: true})





app.get("/", (req,res) =>{
    //res.send("Hello World");
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});

app.post("/posts/userform",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("app listening ")
})