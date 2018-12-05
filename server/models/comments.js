"use strict";
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    "comments",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      BlogId: DataTypes.INTEGER,
      userName: DataTypes.STRING,
      Comment: DataTypes.STRING,
      Deleted: DataTypes.INTEGER,
      datePost: DataTypes.STRING,
      
    },
    {
      timestamps: false
    }
  );

  comments.associate = function(models) {
    comments.hasMany(models.blogs, {
      foreignKey: "Id"
    });
  };

  return comments;
};
