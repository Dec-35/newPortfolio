// Import required modules
import express from 'express';
import http from 'http';
import https from 'https';

// Create an instance of Express
const app = express();
app.use(express.json());
//use ejs
app.set('view engine', 'ejs');

// Define routes
import router from './routes/router.js';
app.use('/', router);

// Start the server
const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);
httpServer.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
