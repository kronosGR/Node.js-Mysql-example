class SpeciesService {
  constructor(db) {
    this.Specie = db.Specie;
  }

  async getSpecies() {
    return this.Specie.findAll({ where: {} });
  }

  async updateSpecie(id, name) {
    const tmp = await this.Specie.update(
      {
        Name: name,
      },
      {
        where: { Id: id },
        returning: true,
        plain: true,
      }
    );
    console.log(tmp);
  }

  async deleteSpecie(id) {
    return this.Specie.destroy({
      where: { Id: id },
    });
  }
}

module.exports = SpeciesService;
