const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect =()=>{

    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection established");
    })
    .catch((e)=>{
        console.log("not connection established");
        console.error(e.message);
        process.exit(1);
    })
}
module.exports = dbconnect;