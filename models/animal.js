module.exports = (sequelize, Sequelize) => {
  const Animal = sequelize.define(
    'Animal',
    {
      Name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      BirthDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Animal.associate = function (models) {
    Animal.belongsTo(models.Specie, {
      foreignKey: {
        allowNull: false,
      },
    });
    Animal.belongsTo(models.Size);
    Animal.belongsToMany(models.Temperament, { through: models.AnimTempe });
    Animal.belongsTo(models.User);
  };

  return Animal;
};
