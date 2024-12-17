const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Coordinacion extends Model {}

Coordinacion.init({
    profesorId: { type: DataTypes.INTEGER, field: 'profesor_id' },
    eventoId: { type: DataTypes.INTEGER, field: 'evento_id' }
},
{
    sequelize,
    modelName: 'Coordinacion',
    tableName: 'coordinacion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
