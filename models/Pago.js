const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Pago extends Model {}

Pago.init({
    id: { type: DataTypes.INTEGER, field: 'pago_id', primaryKey: true },
    alumnoId: { type: DataTypes.INTEGER, field: 'alumno_id' },
    fecha: { type: DataTypes.DATEONLY },
    monto: { type: DataTypes.DECIMAL(10, 2) },
    metodoPago: { type: DataTypes.INTEGER, field: 'metodo_pago', allowNull: true },
    estado: { type: DataTypes.INTEGER, allowNull: true },
    concepto: { type: DataTypes.STRING(100) }
},
{
    sequelize,
    modelName: 'Pago',
    tableName: 'pago',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
