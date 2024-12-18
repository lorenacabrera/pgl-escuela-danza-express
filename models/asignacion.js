'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asignacion.init({
    profesorId: { DataTypes.INTEGER, allowNull: false },
    claseId: { DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Asignacion',
    tableName: 'asignacion',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Asignacion;
};
