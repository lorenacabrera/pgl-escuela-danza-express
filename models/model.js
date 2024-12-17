// module.exports = (sequelize, Sequelize) => {

// import {} from './dbConn.js';

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

class Alumno extends Model {}
class Clase extends Model {}
class Coordinacion extends Model {}
class Evento extends Model {}
class Inscripcion extends Model {}
class Pago extends Model {}
class Participacion extends Model {}
class Profesor extends Model {}
class RedSocial extends Model {}

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

const alumno = Alumno.build({
    nombre: 'john',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connecto to the database:', error);
    }

    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to synchronize the database:', error);
    }
})()
