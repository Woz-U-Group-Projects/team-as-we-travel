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
      datePost: DataTypes.DATETIME,
      Deleted: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );

  comments.associate = function(models) {
    comments.hasMany(models.blog, {
      foreignKey: "Id"
    });
  };

  return comments;
};
