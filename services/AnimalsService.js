const sequelize = require('sequelize');

class AnimalsService {
  constructor(db) {
    this.sequelize = db.sequelize;
    this.Animal = db.Animal;
    this.Specie = db.Specie;
    this.Size = db.Size;
    this.Temperament = db.Temperament;
  }

  async getAnimals() {
    const animals = await this.sequelize.query(
      'SELECT `Animal`.`Name`, `Animal`.`id`, `Animal`.`BirthDate`, `Animal`.`UserId`, ' +
        "DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), BirthDate)), '%Y') + 0 AS `Age`,  " +
        '`Specie`.`id` AS `Specie.id`, `Specie`.`Name` AS `SpecieName`,  ' +
        '`Size`.`id` AS `Size.id`, `Size`.`Name` AS `SizeName`,  ' +
        'group_concat(`Temperaments`.`id`) AS `Temperaments.id`, ' +
        ' group_concat(`Temperaments`.`name`) AS `TemperamentsName` ' +
        '  FROM `Animals` AS `Animal` INNER JOIN `Species` AS  ' +
        '`Specie` ON `Animal`.`SpecieId` = `Specie`.`id` INNER JOIN `Sizes` ' +
        ' AS `Size` ON `Animal`.`SizeId` = `Size`.`id` ' +
        ' INNER JOIN ( `AnimTempes` AS `Temperaments->AnimTempe` INNER JOIN  ' +
        ' `Temperaments` AS `Temperaments` ON  ' +
        ' `Temperaments`.`id` = `Temperaments->AnimTempe`.`TemperamentId`) ON ' +
        '  `Animal`.`id` = `Temperaments->AnimTempe`.`AnimalId` GROUP BY `Animal`.`id` ' +
        '   ORDER BY `Animal`.`id` ASC '
    );
    // const animals = await this.Animal.findAll({
    //   attributes: [
    //     'Name',
    //     'id',
    //     'BirthDate',
    //     'UserId',
    //     [
    //       sequelize.literal(
    //         `DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), BirthDate)), '%Y') + 0`
    //       ),
    //       'Age',
    //     ],
    //   ],
    //   where: {},
    //   order: [['id', 'Asc']],
    //   include: [
    //     {
    //       model: this.Specie,
    //       required: true,
    //       attributes: ['Name'],
    //     },
    //     {
    //       model: this.Size,
    //       required: true,
    //       attributes: ['Name'],
    //     },
    //     {
    //       model: this.Temperament,
    //       required: true,
    //       through: { attributes: [] },
    //     },
    //   ],
    // });
    console.log(animals[0][0]);
    // animals.forEach((animal) => {
    //   let arr = [];
    //   animal.Temperaments.forEach((temperament) => arr.push(temperament.name));
    //   animal.Temperament = arr.join(', ');
    // });
    return animals[0];
  }

  async adoptAnimal(id, userId) {
    const tmp = await this.Animal.update(
      {
        UserId: userId,
      },
      {
        where: { id: id },
        returning: true,
        plain: true,
      }
    );
  }
  async cancelAdoption(id) {
    const tmp = await this.Animal.update(
      {
        UserId: null,
      },
      {
        where: { id: id },
        returning: true,
        plain: true,
      }
    );
  }
}

module.exports = AnimalsService;
