'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matricula.init({
    alumnoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'alumno_id'
    },
    claseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'clase_id'
    }
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matricula',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Matricula;
};
