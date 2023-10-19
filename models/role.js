module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    'Role',
    {
      role: { type: Sequelize.DataTypes.STRING, allowNull: false, unique: true },
    },
    { timestamps: false }
  );

  Role.associate = function (models) {
    Role.hasOne(models.User);
  };

  return Role;
};
