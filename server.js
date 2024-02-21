// Import required modules
import express from 'express';

// Create an instance of Express
const app = express();
app.use(express.json());
//use ejs
app.set('view engine', 'ejs');
//tell express where to find the views
app.set('views', 'views');
//define a static folder
app.use(express.static('public'));

// Define routes
import router from './routes/router.js';
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});

//module.exports = app;
export default app;