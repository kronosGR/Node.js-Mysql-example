class TemperamentService {
  constructor(db) {
    this.Temperament = db.Temperament;
  }

  async getTemperaments() {
    return this.Temperament.findAll({ where: {} });
  }

  async updateTemperament(id, name) {
    const tmp = await this.Temperament.update(
      { name: name },
      {
        where: { Id: id },
        returning: true,
        plain: true,
      }
    );
  }

  async deleteTemperament(id) {
    return this.Temperament.destroy({
      where: { Id: id },
    });
  }
}

module.exports = TemperamentService;
