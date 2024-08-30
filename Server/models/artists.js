'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    static associate(models) {
      Artists.belongsTo(models.Genre, { foreignKey: 'genre_id' });
    }
  }
  
  Artists.init({
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    artistname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bio_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageurl: {
      type: DataTypes.STRING
    }
   
  }, {
    sequelize,
    modelName: 'Artists',
    tableName: 'Artists',
  });

  return Artists;
};