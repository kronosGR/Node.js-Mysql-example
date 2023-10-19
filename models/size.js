module.exports = (sequelize, Sequelize) => {
  const Size = sequelize.define(
    'Size',
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

  Size.associate = function (models) {
    Size.hasOne(models.Animal);
  };
  return Size;
};
