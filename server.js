// Create an instance of Express
const express = require('express');
const app = express();
app.use(express.json());
//use ejs
app.set('view engine', 'ejs');
//tell express where to find the views
app.set('views', __dirname + '/views');
//define a static folder
app.use(express.static('public'));

// Define routes
const router = require('./routes/router.js');
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express app
module.exports = app;
