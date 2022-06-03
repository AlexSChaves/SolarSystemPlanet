const planetController = require('../controllers/planetController');
const express = require('express');
const route = express.Router();

route.get('/planets', planetController.getAll);
route.get('/planet/:id', planetController.findById);

module.exports = route;
