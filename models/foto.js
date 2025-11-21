module.exports = (sequelize, Sequelize) => {
  const Foto = sequelize.define("foto", {
    titulo: Sequelize.STRING,
    filename: Sequelize.STRING,
    url: Sequelize.STRING
  }, {
    freezeTableName: true   
  });

  return Foto;
};
