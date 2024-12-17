const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class RedSocial extends Model {}

RedSocial.init({
    id: { type: DataTypes.INTEGER, field: 'red_social_id', primaryKey: true },
    plataforma: { type: DataTypes.STRING(50) },
    usuario: { type: DataTypes.STRING(100) },
    descripcion: { type: DataTypes.STRING(255) }
},
{
    sequelize,
    modelName: 'RedSocial',
    tableName: 'red_social',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
