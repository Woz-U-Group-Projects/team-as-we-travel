"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("blog", "Deleted", Sequelize.BOOLEAN, {
        allowNull: true
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn("blog", "Deleted")];
  }
};
