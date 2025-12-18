const express=require('express');
const app=express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

const Chat=require("./models/chat.js");



main().then((res)=>{
    console.log("connection succes!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WETOSH');
}




// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/WETOSH');
//   await Chat.deleteMany({});
//   console.log("All books deleted");
// }

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});