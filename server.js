// Create an instance of Express
const express = require('express');
const app = express();
app.use(express.json());
//use ejs
app.set('view engine', 'ejs');
//tell express where to find the views
app.set('views', 'views');
//define a static folder
app.use(express.static('public'));

// Define routes
const router = require('./routes/router.js');
app.use('/', router);

// Export the Express app
module.exports = app;
