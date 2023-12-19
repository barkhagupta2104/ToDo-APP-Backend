
const express = require('express');
// Import routes for ToDo API
const todoroutes = require('./routes/ToDos');
const dbconnect = require('./confi/db');
const cors = require('cors');
const app = express();


// Load config from env file
require('dotenv').config();
const PORT = process.env.PORT;

// Middleware to parse JSON request body
app.use(express.json());

app.use(cors());


// Mount the todo API routes
app.use('/api/v1', todoroutes);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

dbconnect();

// Other routes or configurations...
app.get('/',(req,res)=>{
    res.send("hello")
})