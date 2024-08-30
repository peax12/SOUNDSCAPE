'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Song', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      album_id: {
        type: Sequelize.INTEGER,
       
      },
      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      
      },
     
    
      songname: {
        type: Sequelize.STRING,
        allowNull:false
      },
     
      length: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
   
      tracknumber: {
        type: Sequelize.INTEGER
      },

      songfile: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Songs');
  }
};