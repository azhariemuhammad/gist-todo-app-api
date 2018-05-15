'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    location: DataTypes.STRING,
    time_start: DataTypes.TIME
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    associate: function(models) {
      Task.belogsTo(models.User)
    }
  };
  return Task;
};