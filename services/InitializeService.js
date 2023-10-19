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
    await this.getJSON('animals.json');
  }

  async getJSON(file) {
    const queries = await req(
      `http://${process.env.HOST}:${process.env.PORT}/json/${file}`
    );
    const json = JSON.parse(queries.body);
    const vl = Object.values(json);
    for (let x = 0; x < vl.length; x++) {
      for (let i = 1; ; i++) {
        let q = 'query' + i;
        if (vl[x][q]) {
          await this.Sequelize.query(vl[x][q], { ignore: true });
        } else {
          break;
        }
      }
    }
  }
}

module.exports = InitializeService;
