const express = require('express');
const dotenv = require('dotenv');
const route = require('../routes/planetRoutes');

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(route);
app.listen(PORT, () => console.log(`Ouvindo na Porta ${PORT}`));
