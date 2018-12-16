"use strict";
module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define(
    "blogs",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Blog: DataTypes.STRING,
      Date: DataTypes.DATE,
      userName: DataTypes.STRING,
      Deleted: DataTypes.INTEGER,
      Title: DataTypes.STRING,
     
    },
    {
      timestamps: false
    }
  );

  //blogs.associate = function(models) {
   // blogs.belongsTo(models.comments, {
    //  foreignKey: "blogId"
   // });
 // };
  return blogs;
};

