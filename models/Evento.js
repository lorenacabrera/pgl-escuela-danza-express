const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Evento extends Model {}

Evento.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, field: 'evento_id', primaryKey: true },
    nombre: { type: DataTypes.STRING(100) },
    fecha: { type: DataTypes.DATEONLY },
    ubicacion: { type: DataTypes.STRING(255) },
    descripcion: { type: DataTypes.STRING(255) },
    redSocialId: { type: DataTypes.INTEGER, field: 'red_social_id' }
},
{
    sequelize,
    modelName: 'Evento',
    tableName: 'evento',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
