'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alumno.init({
    nombre: DataTypes.STRING,
    apellido1: DataTypes.STRING,
    nacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alumno',
    tableName: 'alumno',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Alumno;
};
