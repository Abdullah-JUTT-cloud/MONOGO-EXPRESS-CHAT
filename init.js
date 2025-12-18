const mongoose = require('mongoose');

const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("connection succes!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WETOSH');
}


let chat1=new Chat({
    from:"Abdullah",
    to:"Fatima",
    msg:"ILUVU!!!!",
    created_at:new Date(),
});

chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});