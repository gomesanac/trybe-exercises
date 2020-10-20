'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'Leonardo',
          email: 'leo@test.com',
        },
        {
          fullName: 'JEduardo',
          email: 'edu@test.com',
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
