const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Alumno extends Model {}

Alumno.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, field: 'alumno_id', primaryKey: true },
        nombre: { type: DataTypes.STRING(50), allowNull: false },
        filename: { type: DataTypes.STRING(50) },
        apellido: { type: DataTypes.STRING },
        fechaNacimiento: { type: DataTypes.DATEONLY, field: 'fecha_nacimiento' },
        contacto: { type: DataTypes.STRING(100) },
        mail: { type: DataTypes.STRING(100) },
        telefono: { type: DataTypes.STRING(15) },
        nivel: { type: DataTypes.INTEGER, allowNull: true },
        fecha: { type: DataTypes.DATEONLY } 
},
{
    sequelize,
    modelName: 'Alumno',
    tableName: 'alumno',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

