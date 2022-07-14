'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'amizades',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },

        usuarios_id1: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },

        usuarios_id2: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },

        aceita:{
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('amizades');
  }
};
