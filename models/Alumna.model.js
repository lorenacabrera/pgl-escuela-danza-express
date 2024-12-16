
module.exports = (sequelize, Sequelize) => {
    const Alumna = sequelize.define("Alumna", {
        id_alumna:{
            type: Sequelize.INTEGER,
                    },
         nombre: {
            type: Sequelize.STRING
         },
         filename: {
            type: Sequelize.STRING
         }

});

return Alumna;
};