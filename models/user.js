module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'User',
    {
      fullName: Sequelize.DataTypes.STRING,
      username: { type: Sequelize.DataTypes.STRING, allowNull: false, unique: true },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  User.associate = function (models) {
    User.belongsTo(models.Role);
  };

  return User;
};
