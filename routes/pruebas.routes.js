const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pruebas = require('../models/Pruebas.model');
const User = require("../models/User.model");


router.post('/', (req, res, next) => {
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

// router.get('/pruebas/:_id', (req, res, next)=>{
//     const {id} = req.body
//     console.log(req.body)                                               //consulta
//     Pruebas.findById({_id:id })
//     .then((response) => res.status(200).json({response}))
// })

router.post('/add-pruebas', (req, res, next) => {
    const { idPruebas, idUser } = req.body
    // console.log(req.body)
    User.findByIdAndUpdate(idUser, { $push: { pruebas: idPruebas } })
        .then((response) => res.status(200).json({ response, message: 'añadido y guardado' }))
        .catch((err) => res.json(err))
})


router.get('/api/carrito', (req, res, next) => {
    const {_id} = req.payload
    User.findById(_id)
        .populate('pruebas')
        .then((pruebasAdded) => res.status(200).json(pruebasAdded))
        .catch((err) => res.json(err))

})



router.post("/api/carrito", (req, res) => {
    const { idPruebas, idUser } = req.body

 console.log(idPruebas)
 console.log(idUser)
 

    User.findByIdAndUpdate(idUser, { $pull: { pruebas: idPruebas } })
    .then((response) => res.status(200).json({ response, message: 'añadido y guardado' }))
    .catch((err) => res.json(err))


    // User.findByIdAndUpdate(req.user._id, { $pull: { pruebas: _id } })
    //     .then((response) => res.status(200).json({ response, message: 'eliminado' }))
    //     .catch((err) => res.json(err));
});


module.exports = router;