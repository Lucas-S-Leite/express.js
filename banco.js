const Sequelize = require ("sequelize")
const sequelize = new Sequelize ("test", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
nome:{
    type: Sequelize.STRING
},
endereço:{
    type: Sequelize.STRING
},
bairro:{
    type: Sequelize.STRING
},
cep:{
    type: Sequelize.STRING
},
cidade:{
    type: Sequelize.STRING
},
estado:{
    type: Sequelize.STRING
},
observacao:{
    type: Sequelize.TEXT
}
})

//Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Lucas Santos Leite",
    endereco: "Av Aguia de Haia",
    bairro: "AE Carvalho",
    cep: 0982311,
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Teste"
})