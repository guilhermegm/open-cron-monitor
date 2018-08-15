const Sequelize = require('sequelize')
const sequelize = require('../common/sequelize')

const Report = sequelize.define('Report', {
  name: Sequelize.STRING,
  success: Sequelize.BOOLEAN,
  log: Sequelize.TEXT,
})

module.exports = Report
