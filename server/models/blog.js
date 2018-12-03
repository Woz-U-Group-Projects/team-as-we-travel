"use strict";
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "blog",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Blog: DataTypes.STRING,
      Date: DataTypes.STRING,
      userName: DataTypes.STRING,
      Deleted: DataTypes.INTEGER,
      Title: DataTypes.STRING,
     
    },
    {
      timestamps: false
    }
  );

  blog.associate = function(models) {
    blog.belongsTo(models.comments, {
      foreignKey: "blogId"
    });
  };
  return blog;
};

