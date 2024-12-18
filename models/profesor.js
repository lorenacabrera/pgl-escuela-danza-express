'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesor.init({
    nombre:  {
        DataTypes.STRING(50),
        allowNull: false
    },
    apellido1: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profesor',
    tableName: 'profesor'
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Profesor;
};
