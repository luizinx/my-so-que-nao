'use strict';


const amizades = [
  {
    id:1,
    usuarios_id1:1,
    usuarios_id2:2,
    aceita: true
  },
  {
    id:2,
    usuarios_id1:2,
    usuarios_id2:1,
    aceita: false
  },
  {
    id:3,
    usuarios_id1:3,
    usuarios_id2:2,
    aceita: true
  },
]

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('amizades', amizades,  {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('amizades', null, {});
     
  }
};
