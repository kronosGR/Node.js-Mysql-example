module.exports = (sequelize, Sequelize) => {
  const Animal = sequelize.define(
    'Animal',
    {
      Name: { type: Sequelize.DataTypes.STRING, allowNull: false, unique: true },
      BirthDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      Adopted: { type: Sequelize.DataTypes.BOOLEAN },
    },
    { timestamps: false }
  );

  Animal.associate = function (models) {
    Animal.belongsTo(models.Specie);
    Animal.belongsTo(models.Size);
    Animal.belongsToMany(models.Temperament, { through: models.AnimTempe });
  };

  return Animal;
};
