const petRepo = require('./petRepo');

class PetService {
    getAllPets() {
        return petRepo.getAllPets();
    }

    getPetById(id) {
        return petRepo.getPetById(id);
    }

    createPet(name) {
        return petRepo.createPet(name);
    }

    deletePet(id) {
        return petRepo.deletePet(id);
    }
}

module.exports = new PetService();
