const express = require('express');
const router = express.Router();
const petController = require('./petController');

router.get('/get-all', petController.getAllPets);
router.get('/get-by-id/:id', petController.getPetById);
router.post('/create-new-pet', petController.createPet);
router.delete('/delete/:id', petController.deletePet);
router.get('/create-5-pets',petController.create5pets);
router.get('/hello',petController.sayHello);

module.exports = router;
