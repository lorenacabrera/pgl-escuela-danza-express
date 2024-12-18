'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint('matricula', {
          fields: ['alumno_id'],
          type: 'foreign key',
          name: 'matricula_alumno_fk',
          references: {
            table: 'alumno',
            field: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          transaction: t
        }),
        queryInterface.addConstraint('matricula', {
          fields: ['clase_id'],
          type: 'foreign key',
          name: 'matricula_clase_fk',
          references: {
            table: 'clase',
            field: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          transaction: t
        })
      ]);  
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('matricula', 'matricula_alumno_fk', { transaction: t }),
        queryInterface.addConstraint('matricula', 'matricula_clase_fk', { transaction: t })
      ]);  
    });
  }
};
