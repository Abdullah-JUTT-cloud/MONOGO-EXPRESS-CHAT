
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

mongoose.set("strictQuery", true);

const allChats = [
  {
  from: "Hassan Rafiq",
  to: "Noor Fatima",
  msg: "Just checking in to see if you managed to complete the review. If not, we can reschedule and go through it together tomorrow.",
  created_at: new Date(),
},
{
  from: "Noor Fatima",
  to: "Hassan Rafiq",
  msg: "I completed most of it, but a couple of sections still need clarification. Tomorrow would actually work better for me.",
  created_at: new Date(),
},
{
  from: "Ali Zain",
  to: "Sophie Williams",
  msg: "I’ve updated the documentation to reflect the latest API changes. Please double-check the examples when you have time.",
  created_at: new Date(),
},
{
  from: "Sophie Williams",
  to: "Ali Zain",
  msg: "Got it. I’ll review the documentation tonight and let you know if anything feels unclear or inconsistent.",
  created_at: new Date(),
},
{
  from: "Anum Khalid",
  to: "Hassan Rafiq",
  msg: "Are we still aligned on the meeting agenda for tomorrow? I want to make sure we don’t miss any important points.",
  created_at: new Date(),
},
{
  from: "Hassan Rafiq",
  to: "Anum Khalid",
  msg: "Yes, the agenda is finalized. I’ll send you a quick summary so we’re fully aligned before the meeting.",
  created_at: new Date(),
},
{
  from: "Fahad Mehmood",
  to: "Ali Zain",
  msg: "I’m running into an issue with the deployment pipeline. Have you faced something similar before?",
  created_at: new Date(),
},
{
  from: "Ali Zain",
  to: "Fahad Mehmood",
  msg: "Yes, that usually happens due to environment variables. Check the configuration file and redeploy once.",
  created_at: new Date(),
},
{
  from: "Iqra Shah",
  to: "Noor Fatima",
  msg: "Do you have the final version of the report? I need it before I can prepare my part of the presentation.",
  created_at: new Date(),
},
{
  from: "Noor Fatima",
  to: "Iqra Shah",
  msg: "I’m finalizing it right now. I’ll send it over within the next hour so you have enough time to prepare.",
  created_at: new Date(),
},
{
  from: "Danish Ali",
  to: "Sophie Williams",
  msg: "I think the sprint goals might be a bit too ambitious. Should we consider breaking them into smaller tasks?",
  created_at: new Date(),
},
{
  from: "Sophie Williams",
  to: "Danish Ali",
  msg: "I agree. Let’s discuss this in the planning meeting and adjust the scope to something more realistic.",
  created_at: new Date(),
},
{
  from: "Usama Tariq",
  to: "Hassan Rafiq",
  msg: "Thanks for sharing the resources earlier. They were really helpful in understanding the overall flow.",
  created_at: new Date(),
},
{
  from: "Hassan Rafiq",
  to: "Usama Tariq",
  msg: "Glad they helped. Let me know if you need anything else or want additional references.",
  created_at: new Date(),
},
{
  from: "Areeba Khan",
  to: "Noor Fatima",
  msg: "Are you free later today? I wanted to discuss a few ideas before we lock the final design.",
  created_at: new Date(),
},
{
  from: "Noor Fatima",
  to: "Areeba Khan",
  msg: "Yes, I’ll be free in the evening. Let’s connect then and go through everything carefully.",
  created_at: new Date(),
},
{
  from: "Saif Ullah",
  to: "Ali Zain",
  msg: "I noticed a small bug in the validation logic. It’s not critical, but it might cause issues later.",
  created_at: new Date(),
},
{
  from: "Ali Zain",
  to: "Saif Ullah",
  msg: "Good catch. Please create a ticket for it so we can track and fix it properly.",
  created_at: new Date(),
},
{
  from: "Hina Ashraf",
  to: "Sophie Williams",
  msg: "I’ve shared the updated mockups. Let me know if the changes align with the requirements.",
  created_at: new Date(),
},
{
  from: "Sophie Williams",
  to: "Hina Ashraf",
  msg: "They look much better now. I’ll review them in detail and share structured feedback.",
  created_at: new Date(),
},
{
  from: "Bilal Naveed",
  to: "Danish Ali",
  msg: "Are you comfortable presenting the analytics section, or should I handle that part?",
  created_at: new Date(),
},
{
  from: "Danish Ali",
  to: "Bilal Naveed",
  msg: "I can present it, but I might need your help with a couple of charts.",
  created_at: new Date(),
},
{
  from: "Maha Yousaf",
  to: "Areeba Khan",
  msg: "Just wanted to say the proposal draft looks solid. The structure is clear and easy to follow.",
  created_at: new Date(),
},
{
  from: "Areeba Khan",
  to: "Maha Yousaf",
  msg: "Thanks! I’ll make a few minor refinements and then share the final version.",
  created_at: new Date(),
},
{
  from: "Zain Abbas",
  to: "Usama Tariq",
  msg: "Do you think we should add logging to this module for better debugging?",
  created_at: new Date(),
},
{
  from: "Usama Tariq",
  to: "Zain Abbas",
  msg: "Yes, that would help a lot during production issues. Let’s add basic logging at least.",
  created_at: new Date(),
},
{
  from: "Komal Farooq",
  to: "Hina Ashraf",
  msg: "Can you share the color palette you finalized? I need it for consistency.",
  created_at: new Date(),
},
{
  from: "Hina Ashraf",
  to: "Komal Farooq",
  msg: "Sure, I’ll send you the palette along with the design guidelines shortly.",
  created_at: new Date(),
},
{
  from: "Rizwan Ahmed",
  to: "Bilal Naveed",
  msg: "The client asked for a quick progress update. Can you summarize what we’ve completed so far?",
  created_at: new Date(),
},
{
  from: "Bilal Naveed",
  to: "Rizwan Ahmed",
  msg: "Yes, I’ll prepare a short summary highlighting the completed milestones and next steps.",
  created_at: new Date(),
}
];

async function seedDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WETOSH");
  console.log("DB connected");

  await Chat.insertMany(allChats);
  console.log("Chats inserted");

  await mongoose.connection.close();
}

seedDB()
  .then(() => process.exit())
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

