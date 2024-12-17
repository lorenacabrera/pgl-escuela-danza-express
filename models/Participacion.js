const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Participacion extends Model {}

Participacion.init({
    alumnoId: { type: DataTypes.INTEGER, field: 'alumno_id', primaryKey: true },
    eventoId: { type: DataTypes.INTEGER, field: 'evento_id', primaryKey: true }
},
{
    sequelize,
    modelName: 'Participacion',
    tableName: 'participacion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
