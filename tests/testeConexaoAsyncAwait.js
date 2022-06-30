const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD
const config = {
    username:"root",
    password:"futebolcs10",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
}

// 3 - Criar a conexão com o banco!
const conexao = new sequelize(config)


let carregarFuncionarios = async () =>{
    let resultado = await conexao.query('SELECT * FROM funcionarios');
    console.log(resultado);
}

carregarFuncionarios(); 