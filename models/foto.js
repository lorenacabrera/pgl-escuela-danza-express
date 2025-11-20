module.exports = (sequelize, Sequelize) => {
  const Foto = sequelize.define("foto", {
    titulo: Sequelize.STRING,
    filename: Sequelize.STRING,
    url: Sequelize.STRING
  }, {
    freezeTableName: true   // ← ESTO ES LO QUE EVITA PLURAL
  });

  return Foto;
};
