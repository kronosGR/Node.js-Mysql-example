module.exports = (sequelize, Sequelize) => {
  const Specie = sequelize.define(
    'Specie',
    {
      Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
  Specie.associate = function (models) {
    Specie.hasOne(models.Animal);
  };
  return Specie;
};
