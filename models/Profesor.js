const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Profesor extends Model {}

Profesor.init({
    id: { type: DataTypes.INTEGER, field: 'profesor_id', primaryKey: true },
    nombre: { type: DataTypes.STRING(50) },
    apellido: { type: DataTypes.STRING(50) },
    especializacion: { type: DataTypes.STRING(100) },
    mail: { type: DataTypes.STRING(100) },
    telefono: { type: DataTypes.STRING(15) }
},
{
    sequelize,
    modelName: 'Profesor',
    tableName: 'profesor',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
