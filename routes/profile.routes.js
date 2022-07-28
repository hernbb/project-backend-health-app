const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User.model');



router.get('/api/profile', (req,res, next) => {
	const { _id } = req.payload
	User.findById(_id)
	.then((response) => {
		res.status(200).json(response)
	})
	.catch((err) => {
		console.log(err);
		res.status(500).json({ message: 'Internal Server Error' });
	});
});

router.post('/api/profile', (req, res, next) => {
	const {address1, address2, city, country, province, zipCode } = req.body;
	// console.log(req.body)
	const { _id } = req.payload
	
	User.findByIdAndUpdate(_id,{
		
		address1:address1,
		address2:address2,
		city:city,
		country:country,
		province:province,
		zipCode: zipCode
	},
	{ new: true })
	.then((userUpdate) => {
		
		// Send a json response containing the user object
		res.status(201).json({ user: userUpdate , message: 'Updated successfully' });
		
	})
	.catch((err) => {
		console.log(err);
		res.status(500).json({ message: 'Internal Server Error' });
	});

})


module.exports = router;
