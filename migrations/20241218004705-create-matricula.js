'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matricula', {
     alumnoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'alumno_id'
      },
      claseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'clase_id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matricula');
  }
};
