'use strict';
const bcrypt = require('bcrypt');



const usuarios = [
  {
    id: 1,
    nome: "Snoop dog smith",
    email:"contattosnoop@teste.com",
    senha:bcrypt.hashSync("123456", 10),
    foto: "snoop.jpg"

  },
  {
    id: 2,
    nome: "50cent Chavante",
    email:"contattochavante@teste.com",
    senha:bcrypt.hashSync("125456", 10),
    foto: "50cent.jpg"

  },
  {
    id: 3,
    nome: "Eminem speed",
    email:"contattospeed@teste.com",
    senha:bcrypt.hashSync("123656", 10),
    foto: "speed.jpg"

  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
