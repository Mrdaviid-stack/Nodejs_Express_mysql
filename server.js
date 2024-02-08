const http = require('http');
const express = require('express');
const dotenv = require('dotenv');

const DB = require('./config/db');

// Load env file.
dotenv.config({ path: './config/config.env' });

DB.client.co

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 80;

server.listen(port, console.log(`Server running on ${process.env.NODE_ENV} mode in port ${port}`));
