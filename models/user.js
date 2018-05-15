'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(20)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};