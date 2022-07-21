'use strict';

const curtidas = [
  {
    id:1,
    usuarios_id:1,
    publicacoes_id:1

  },
  {
    id:1,
    usuarios_id:1,
    publicacoes_id:2

  },
  {
    id:1,
    usuarios_id:1,
    publicacoes_id:3

  },
  {
    id:2,
    usuarios_id:2,
    publicacoes_id:1

  },
  {
    id:2,
    usuarios_id:2,
    publicacoes_id:2

  },
  {
    id:2,
    usuarios_id:2,
    publicacoes_id:3

  },
  {
    id:3,
    usuarios_id:3,
    publicacoes_id:1

  },
  {
    id:3,
    usuarios_id:3,
    publicacoes_id:2

  },
  {
    id:3,
    usuarios_id:3,
    publicacoes_id:3

  },
  {
    id:3,
    usuarios_id:3,
    publicacoes_id:4

  },
]

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('curtidas', curtidas, {});
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('curtidas', null, {});
  
  }
};