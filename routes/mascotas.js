const express = require('express');
const router = express.Router();


//We want to create some routes for:

// Getting all
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Getting one
router.get('/:id', (req, res) => {

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