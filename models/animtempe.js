module.exports = (sequelize, Sequelize) => {
  const AnimTempe = sequelize.define('AnimTempe', {}, { timestamps: false });

  AnimTempe.associate = function (models) {};
  return AnimTempe;
};
