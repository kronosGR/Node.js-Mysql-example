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
}

module.exports = UserService;
