'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Heathrow Airport',
        address: 'Longford TW6, UK',
        cityid: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Berlin Brandenburg Airport',
        address: 'Willy-Brandt-Platz 1, 12529 Schönefeld',
        cityid: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ben Gurion International Airport',
        address: 'Ben Gurion Airport, 7015001, Israel.',
        cityid: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sheremetyevo - A.S. Pushkin International Airport',
        address: 'Sheremetyevo International Airport, Khimki, Moscow Oblast, 141400.',
        cityid: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indra Gandhi International Airport',
        address: 'Palam, New Delhi, 110037',
        cityid: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'London Luton Airport',
        address: 'Luton, UK',
        cityid: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'London Gatwick Airport',
        address: 'Gatwick, UK',
        cityid: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'London City Airport',
        address: 'London, UK',
        cityid: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};