class SpeciesService {
  constructor(db) {
    this.Specie = db.Specie;
  }

  async getSpecies() {
    return this.Specie.findAll({ where: {} });
  }
}

module.exports = SpeciesService;
