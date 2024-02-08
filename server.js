const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const DB = require('./config/db');
const user = require('./routes/user');
const errorHandler = require('./middleware/error');

// Load env file.
dotenv.config({ path: './config/config.env' });

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 80;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// load route
app.use('/api/v1/users', user);

app.use(errorHandler);

server.listen(port, console.log(`Server running on ${process.env.NODE_ENV} mode in port ${port}`));
