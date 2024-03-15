const petService = require('./petService');

exports.getAllPets = (req, res) => {
    const pets = petService.getAllPets();
    res.json(pets);
};

exports.getPetById = (req, res) => {
    const id = parseInt(req.params.id);
    const pet = petService.getPetById(id);
    if (!pet) {
        return res.status(404).json({ error: "Pet not found." });
    }
    res.json(pet);
};

exports.createPet = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Pet name must be provided." });
    }
    const newPet = petService.createPet(name);
    res.status(201).json(newPet);
};

exports.deletePet = (req, res) => {
    const id = parseInt(req.params.id);
    petService.deletePet(id);
    res.sendStatus(204);
};

exports.create5pets =(req,res) => {
    const newPet = petService.create5pets();
    res.status(201).json(newPet);

};
exports.sayHello =(req,res) => {
    print("hellooo");
    print("hello branchi 2.değişiklik")
}
