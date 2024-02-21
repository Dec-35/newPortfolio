// Import required modules
import express from 'express';
import http from 'http';
import https from 'https';
import { readFileSync } from 'fs';

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
// const httpServer = http.createServer(app).listen(PORT);

// const httpsOptions = {
//   key: readFileSync('private-key.pem'),
//   cert: readFileSync('certificate.pem'),
// };

// if (PORT === 80) {
//   const httpsServer = https.createServer(httpsOptions, app).listen(443);
// }

// console.log('Server started on port ' + PORT);

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});