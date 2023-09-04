const request = require('request');
const util = require('util');
const req = util.promisify(request.get);

class InitializeService {
  constructor(db) {
    this.client = db.sequelize;
    this.Sequelize = db.sequelize;
  }

  async initialize() {
    await this.getJSON('roles.json');
    await this.getJSON('sizes.json');
    await this.getJSON('temperaments.json');
    await this.getJSON('species.json');
    await this.getJSON('users.json');
  }

  async getJSON(file) {
    const queries = await req(
      `http://${process.env.HOST}:${process.env.PORT}/json/${file}`
    );
    const json = JSON.parse(queries.body);
    Object.values(json).forEach(async (item) => {
      console.log('Executed: ' + item.query);
      await this.Sequelize.query(item.query);
    });
  }
}

module.exports = InitializeService;
