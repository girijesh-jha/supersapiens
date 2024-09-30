// src/server.ts

import express from 'express';
import { connectToDatabase } from './config/database';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Supersapiens API is running');
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Rest of your server setup