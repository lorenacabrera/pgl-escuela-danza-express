'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clase.init({
    nombre: { type: DataTypes.STRING, allowNull: false },
    nivelId: { type: DataTypes.INTEGER, allowNull: false, field: 'nivel_id' }
  }, {
    sequelize,
    modelName: 'Clase',
    tableName: 'clase',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Clase;
};
