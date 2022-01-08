//To pass URL paths from the .env file to the mongoose connect method
require('dotenv').config()


// Create a variable as a function express which requires express from the express library to upload it to use it on the server.
const express = require('express');

//Create a variable called app, which will run the function express() that was required before, and will be used to configure our server.
const app = express();


//Configure mongoose to connect to our mongoDB database, so we are gonna require that library  creating a constant calling:
const mongoose = require('mongoose');

//Actually connect to a mongoDB database:
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Connected to Database'));

//Setup our server to accept JSON
app.use(express.json());

// Since we are gonna have a mascotas' API, we are gonna need some routes:
const mascotasRouter = require('./routes/mascotas');
app.use('/mascotas', mascotasRouter);


// We configure the port in which we want the servert to start and a function that runs whenever the app starts whic will announce the server to start correctly.
app.listen(3000, () => console.log('Server Started'));