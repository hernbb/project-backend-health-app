const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pruebas = require('../models/Pruebas.model');
//const User = require('../models/User.model')

router.post('/', (req,res,next) => {
    const { title, description, price } = req.body;

    Pruebas.create({ title, description, price })
        .then((response) => res.json(response))
        .catch((err) => res.json(err))
});
router.get('/', (req, res, next) => {
	Pruebas.find()
	.then((allPruebas) => res.json(allPruebas))
	.catch((err) => res.json(err));
});


module.exports = router;