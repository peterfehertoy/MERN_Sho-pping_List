const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express();
const db = require('./config/keys.js').MONGODB_URI

app.use(express.json());


// Connect to Mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});
