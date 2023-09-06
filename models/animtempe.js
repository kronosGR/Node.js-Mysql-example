module.exports = (sequelize, Sequelize) => {
  const AnimTempe = sequelize.define(
    'AnimTempe',
    {
      AnimalId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Animals',
          key: 'id',
        },
        onDelete: 'restrict',
      },
      TemperamentId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Temperaments',
          key: 'id',
          onDelete: 'restrict',
        },
        onDelete: 'restrict',
      },
    },
    { timestamps: false }
  );

  AnimTempe.associate = function (models) {
    models.Temperament.belongsToMany(models.Animal, { through: models.AnimTempe });
    models.Animal.belongsToMany(models.Temperament, { through: models.AnimTempe });
  };
  return AnimTempe;
};
