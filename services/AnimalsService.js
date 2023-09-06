const sequelize = require('sequelize');

class AnimalsService {
  constructor(db) {
    this.Animal = db.Animal;
    this.Specie = db.Specie;
    this.Size = db.Size;
    this.Temperament = db.Temperament;
  }

  async getAnimals() {
    const animals = await this.Animal.findAll({
      attributes: [
        'Name',
        'id',
        'BirthDate',
        'Adopted',
        [
          sequelize.literal(
            `DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), BirthDate)), '%Y') + 0`
          ),
          'Age',
        ],
      ],
      where: {},
      order: [['id', 'Asc']],
      include: [
        {
          model: this.Specie,
          required: true,
          attributes: ['Name'],
        },
        {
          model: this.Size,
          required: true,
          attributes: ['Name'],
        },
        {
          model: this.Temperament,
          required: true,
          through: { attributes: [] },
        },
      ],
    });
    animals.forEach((animal) => {
      let arr = [];
      animal.Temperaments.forEach((temperament) => arr.push(temperament.name));
      animal.Temperament = arr.join(', ');
    });
    return animals;
  }
}

module.exports = AnimalsService;