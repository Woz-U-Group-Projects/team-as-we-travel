"use strict";
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    "blog",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Blog: DataTypes.STRING,
      Date: DataTypes.DATETIME,
      userName: DataTypes.STRING,
      Deleted: DataTypes.INTEGER,
      Title: DataTypes.STRING,
      Deleted: DataTypes.BOOLEAN
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

router.post("/blog", (req, res) => {
  models.blog
    .findOrCreate({
      where: {
        userName: req.body.userName,
        blog: req.body.blog
      }
    })
    .spread(function(result, created) {
      models.blog
        .findOrCreate({
          where: {
            Id: result.Id
          }
        })
        .spread(function(result, created) {
          if (created) {
            res.redirect("/blog");
          } else {
            res.send("This blog already exists!");
          }
        });
    });
});
