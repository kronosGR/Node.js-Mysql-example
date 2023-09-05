class TemperamentService {
  constructor(db) {
    this.Temperament = db.Temperament;
  }

  async getTemperaments() {
    return this.Temperament.findAll({ where: {} });
  }
}

module.exports = TemperamentService;
