'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', { 
      
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      fueltype: {
        type: Sequelize.STRING,
        allowNull: false,
      },


      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
  });
     
  },

  async down (queryInterface) {
     await queryInterface.dropTable('users');
  },
};
