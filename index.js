const express=require('express');
const app=express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

const Chat=require("./models/chat.js");



main().then((res)=>{
    console.log("connection succes!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WETOSH');
}

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});