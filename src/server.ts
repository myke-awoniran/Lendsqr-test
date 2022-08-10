import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import App from './App';

const port = process.env.PORT || 5000;
const server = http.createServer(App);

function startServer(port: string | number): void {
  // first connect db before starting the server
  server.listen(port, () => {
    console.log(`lendsqr API listening to traffic on port ${port}`);
  });
}

startServer(port);
