import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { VehicleState, ControlInput, EnvironmentUpdate, ClientType } from '../../shared-types/index.js'; // check this import points to the right level depending on if you added a /src directory or not
