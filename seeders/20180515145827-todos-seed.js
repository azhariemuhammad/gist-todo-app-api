'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'azharie',
      password: '123456',
    }])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('User', [{
      username: 'azharie'
    }])
  }
};
