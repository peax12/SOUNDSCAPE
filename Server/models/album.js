'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    
    static associate(models) {
      Album.belongsTo(models.Artists, { foreignKey: 'artist_id' });
    }
  }
  Album.init({
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: false

    },

    albumname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    albumCover: {
       type : DataTypes.STRING,
       allowNull: false
      },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'Album'
  });
  return Album;
};