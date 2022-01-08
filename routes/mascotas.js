const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota')


//We want to create some routes for:

// Getting all
router.get('/', async (req, res) => {
    try{
        const mascotas = await Mascota.find();
        res.json(mascotas)
    } catch(err){
        res.status(500).json({message: err.message})
    };
});

// Getting one
router.get('/:id', (req, res) => {
 res.send(req.params.id)
});

// Creating one
router.post('/', (req, res) => {

});

// Updating one (We use patch instead of put, because we want to update only the field the user wants to update, not the whole entry.)
router.patch('/:id', (req, res) => {

});

// Deleting one
router.delete('/:id', (req, res) => {

});





module.exports = router;