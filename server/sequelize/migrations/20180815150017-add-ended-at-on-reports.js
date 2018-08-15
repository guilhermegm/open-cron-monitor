module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Reports', 'endedAt', {
      type: Sequelize.DATE,
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('Reports', 'endedAt')
  },
}
