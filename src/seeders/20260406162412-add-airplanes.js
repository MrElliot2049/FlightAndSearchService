'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Airplanes', [{
        ModelNumber: 'Airbus A380',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Boeing 747',
        capacity: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Boeing 737',
        capacity: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Airbus A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        ModelNumber: 'Boing 777',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
