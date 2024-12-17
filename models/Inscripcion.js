const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Inscripcion extends Model {}

Inscripcion.init({
    alumnoId: { type: DataTypes.INTEGER, field: 'alumno_id', primaryKey: true },
    claseId: { type: DataTypes.INTEGER, field: 'clase_id', primaryKey: true },
    asistencia: { type: DataTypes.STRING(5) },
    fecha: { type: DataTypes.DATEONLY }
},
{
    sequelize,
    modelName: 'Inscripcion',
    tableName: 'inscripcion',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
