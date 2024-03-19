const express = require('express');
const router = express.Router();
const petController = require('./petController');

router.get('/get-all', petController.getAllPets);
router.get('/get-by-id/:id', petController.getPetById);
router.post('/create-new-pet', petController.createPet);
router.delete('/delete/:id', petController.deletePet);
router.get('/create-5-pets',petController.create5pets);
router.get('/helloWorld',petController.sayHello);
router.get('helloWorld2',petController.sayHello2);
// for hello 
// for new feature branch 
// I accepted both changes
// this is the difference in rel. branch
module.exports = router;
