const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("connection succes!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/WETOSH');
}


let allChats = [
  {
    from: "Abdullah",
    to: "Fatima",
    msg: "Hey, hope you’re doing well.",
    created_at: new Date(),
  },
  {
    from: "Fatima",
    to: "Abdullah",
    msg: "I’m good, thanks! How about you?",
    created_at: new Date(),
  },
  {
    from: "Jutt",
    to: "Kim",
    msg: "Are you free to discuss the project later?",
    created_at: new Date(),
  },
  {
    from: "Kim",
    to: "Jutt",
    msg: "Yes, let’s connect in the evening.",
    created_at: new Date(),
  },
   {
    from: "ROHMA",
    to: "Jutt",
    msg: "HEYYYYY",
    created_at: new Date(),
  },
   {
    from: "JUTT",
    to: "ROHMA",
    msg: "HIIIII",
    created_at: new Date(),
  }
];

Chat.insertMany(allChats);



