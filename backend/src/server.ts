
import 'module-alias/register';
import express from 'express';
import { connectToDatabase } from '@/config/database';
import routes from '@/routes';

const app = express();
const port = process.env.PORT || 3000;

connectToDatabase();

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

