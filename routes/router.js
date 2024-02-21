//router file

import e from 'express';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

export default router;
