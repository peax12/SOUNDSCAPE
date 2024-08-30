'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {

    static associate(models) {
      Song.belongsTo(models.Artists,{foreignKey:'artist_id'});
      Song.belongsTo(models.Album,{foreignKey:'album_id'});
    }
  }
  Song.init({
    album_id: {
      type: DataTypes.INTEGER
    },
    artist_id: {
      type: DataTypes.INTEGER,
       allowNull: false
    },
    
    songname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    length: {
     type:  DataTypes.INTEGER,
     allowNull: false
    },
   
    tracknumber: {
      type: DataTypes.INTEGER,
    },
    songfile: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
    {
    sequelize,
    modelName: 'Song',
    tableName: 'Song'
});
  return Song;
};