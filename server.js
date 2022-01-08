// Create a variable as a function express which requires express from the express library to upload it to use it on the server.
const express = require('express');

//Create a variable called app, which will run the function express() that was required before, and will be used to configure our server.
const app = express();



app.listen(3000, () => console.log('Server Started'));