import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import App from './App';
import { connectDb } from './repositories/database.connection';

const port = process.env.PORT || 5000;
const server = http.createServer(App);

async function startServer(port: string | number): Promise<void> {
  // CONNECT DATABASE BEFORE STARTING THE SERVER
  await connectDb();
  server.listen(port, () => {
    console.log(
      `${process.env.NODE_ENV} :::lendsqr API listening to traffic on port ${port}} `
    );
  });
}

startServer(port);
