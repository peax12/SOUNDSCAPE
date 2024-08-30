'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artists', {
      artist_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artistname: {
        allowNull:false,
        type: Sequelize.STRING
      },

      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Genre',
          key: 'genre_id' 
        },
        onUpdate: 'CASCADE',
        
      },
      
      bio_content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imageurl: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Artists');
  }
};