'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'publicacoes',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },

        texto: {
          type: Sequelize.DataTypes.STRING(120),
          allowNull: false,

        },

        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },

        imagem:{
          type: Sequelize.DataTypes.STRING(45),
          allowNull: true,
        }
  
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('publicacoes');
  }
};
