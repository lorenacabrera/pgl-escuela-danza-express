const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Clase extends Model {}

Clase.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, field: 'clase_id', primaryKey: true },
    nombre: { type: DataTypes.STRING(100) },
    descripcion: { type: DataTypes.STRING(250) },
    nivel: { type: DataTypes.INTEGER, allowNull: true },
    diasHorarios: { type: DataTypes.STRING(100), field: 'dias_horarios' },
    max_estudiantes: { type: DataTypes.INTEGER },
    id_profesor: { type: DataTypes.INTEGER }
},
{
    sequelize,
    modelName: 'Clase',
    tableName: 'clase',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
