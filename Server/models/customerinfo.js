'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class CustomerInfo extends Model {
    static associate(models) {
     CustomerInfo.belongsTo(models.UserLogin,{foreignKey: 'customer_id'});
    }
  }

  CustomerInfo.init({
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true 
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lname: {
      type: DataTypes.STRING
    },
    e_mail: {
      type: DataTypes.STRING,
      unique: true 
    },
    birthDate:{
      type: DataTypes.DATE,
      allowNull:false
      
    },
    profilephoto:{
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'CustomerInfo',
    tableName: 'CustomerInfo', 
    timestamps: true, 
  });

  return CustomerInfo;
};