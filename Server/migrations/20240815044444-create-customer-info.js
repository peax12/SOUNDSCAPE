'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustomerInfo', {

      
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserLogin',
          key: 'customer_id'
        },
        allowNull: false,
        onDelete: 'CASCADE' 
      },
      fname: {
        type: Sequelize.STRING,
        allowNull:false

      },
      lname: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      e_mail: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      birthDate:{
        type: Sequelize.DATE,
        allowNull:false
        
      },
      profilephoto:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CustomerInfo');
  }
};