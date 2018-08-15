module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Reports', 'startedAt', {
      type: Sequelize.DATE,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('Reports', 'startedAt')
  },
}
