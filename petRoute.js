const express = require('express');
const router = express.Router();
const petController = require('./petController');

router.get('/get-all', petController.getAllPets);
router.get('/get-by-id/:id', petController.getPetById);
router.post('/create-new-pet', petController.createPet);
router.delete('/delete/:id', petController.deletePet);
router.post('')

module.exports = router;
