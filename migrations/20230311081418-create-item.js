"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_name: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Items");
  },
};
