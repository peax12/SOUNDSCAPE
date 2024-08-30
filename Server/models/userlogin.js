'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLogin extends Model {
    
    static associate(models) {
    }
  }
  UserLogin.init({
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false

    },
    username: {
      type:DataTypes.STRING,
      allowNull: false

    },
    password:{
       type: DataTypes.STRING,
        allowNull:false
      }
  }, {
    sequelize,
    modelName: 'UserLogin',
    tableName: 'UserLogin'
  });
  return UserLogin;
};