'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    location: DataTypes.STRING,
    time_start: DataTypes.TIME,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.User, { foreignKey: "UserId" });
      }
    }
  });
  return Task;
};