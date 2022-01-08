const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    tipo_mascota: {
        type: Number,
        required: false

    },
    propietario: {
        type: Number,
        required: false
    }


})

module.exports = mongoose.model('Mascota', mascotaSchema);