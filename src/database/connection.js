const Sequelize = require('sequelize')

const connection = new Sequelize('agendadb', 'admin', 'Dev@312H', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;