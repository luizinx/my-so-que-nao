'use strict';

const publicacoes = [
  {
    id:1,
    texto: "Versace é a melhor",
    usuarios_id: 1,
    foto: "Versace.jpg"
  },
  {
    id:2,
    texto: "nike é a melhor",
    usuarios_id: 2,
    foto: "nike.jpg"
  },
  {
    id:3,
    texto: "Adidas é a melhor",
    usuarios_id: 3,
    foto: "Adidas.jpg"
  },
  {
    id:4,
    texto: "shel é a melhor",
    usuarios_id: 4,
    foto: "shel.jpg"
  },
  {
    id:5,
    texto: "Gucci é a melhor",
    usuarios_id: 5,
    foto: "Gucci.jpg"
  },
  {
    id:6,
    texto: "tommy é a melhor",
    usuarios_id: 6,
    foto: "tommy.jpg"
  },
]



module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('publicacoes', publicacoes, {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('publicacoes', null, {});
     
  }
};