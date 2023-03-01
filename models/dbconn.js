const Sequelize = require('sequelize');

//Voce deve definir a conexão na seguinte ordem: ('nome do banco', 'usuario', 'senha')
const sequelize = new Sequelize("test_node","root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conectou no banco")
    })
    .catch((err) => {
        console.log("Deu erro: "+err);
    })

//sequelize.close()
module.exports = sequelize;