const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.dbDatabase, config.dbUsername, config.dbPassword, {
  host: config.dbHost,
  port: config.dbPort,
  dialect: 'postgres',
  logging: false,
})

const authenticate = () => sequelize.authenticate()

authenticate()

module.exports = sequelize
