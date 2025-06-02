const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rotas
app.use('/api', routes);

// Rota base
app.get('/', (req, res) => {
  res.send('API 2FA rodando 🔥');
});

module.exports = app;