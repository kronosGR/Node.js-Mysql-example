class UserService {
  constructor(db) {
    this.User = db.User;
  }

  async create(fullname, username, password, roleId) {
    return this.User.create({
      fullName: fullname,
      username: username,
      password: password,
      RoleId: roleId,
    });
  }

  async getByName(username) {
    return await this.User.findOne({
      where: { username: username },
    });
  }
}

module.exports = UserService;
