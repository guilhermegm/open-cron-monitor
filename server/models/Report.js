const Sequelize = require('sequelize')
const sequelize = require('../common/sequelize')

const Report = sequelize.define('Report', {
  endedAt: Sequelize.DATE,
  log: Sequelize.TEXT,
  name: Sequelize.STRING,
  success: Sequelize.BOOLEAN,
})

module.exports = Report
