import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { VehicleState, ControlInput, EnvironmentUpdate, ClientType } from '../../shared-types/index.js'; // check this import points to the right level depending on if you added a /src directory or not

const app = express();
const server = createServer(app);
// Enable CORS for all domains (development only)
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});