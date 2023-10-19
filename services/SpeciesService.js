class SpeciesService {
  constructor(db) {
    this.Specie = db.Specie;
  }

  async getSpecies() {
    return this.Specie.findAll({ where: {} });
  }

  async addSpecie(name) {
    return this.Specie.create({
      Name: name,
    });
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
  }

  async deleteSpecie(id) {
    return this.Specie.destroy({
      where: { Id: id },
    }).catch((e) => {});
  }
}

module.exports = SpeciesService;
