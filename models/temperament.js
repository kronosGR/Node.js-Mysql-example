module.exports = (sequelize, Sequelize) => {
  const Temperament = sequelize.define(
    'Temperament',
    {
      name: { type: Sequelize.DataTypes.STRING, allowNull: false, unique: true },
    },
    { timestamps: false }
  );
  return Temperament;
};
