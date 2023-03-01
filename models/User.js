const Sequelize = require('sequelize');
const dbconn = require('./dbconn');

const User = dbconn.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, name :{
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Ver documentação do Sequelize
//Cria table no mysql
//User.sync();

module.exports = User;