const express = require("express");
var router = express.Router();
const mysql = require("mysql").verbose();

router.get("/blog", function(req, res, next) {
  models.blog.findAll({}).then(blogFound => {
    res.render("blog", {
      blog: blogFound
    });
  });
});

router.get("/blog/:id", (req, res) => {
  let Id = parseInt(req.params.id);
  models.blog
    .find({
      where: {
        Id: id
      },
      include: [models.comments]
    })
    .then(blog => {
      res.render("specificBlog", {
        Title: blog.Title,
        Blog: blog.Blog,
        UserName: blog.comments.UserName,
        Id: blog.Id
      });
    });
});

router.put("/blog/:id", (req, res) => {
  let id = parseInt(req.params.id);
  models.blog
    .update(
      {
        Title: req.body.title,
        Blog: req.body.blog,
        UserName: req.body.userName
      },
      {
        where: {
          Id: id
        }
      }
    )
    .then(result => {
      res.send();
    });
});

router.delete("/blog/:id/delete", (req, res) => {
  let Id = parseInt(req.params.id);
  models.comments
    .update(
      {
        Deleted: "true"
      },
      {
        where: {
          Id: id
        }
      }
    )
    .then(comments => {
      models.blog
        .update(
          {
            Deleted: "true"
          },
          {
            where: {
              Id: id
            }
          }
        )
        .then(blog => {
          res.redirect("/blog");
        });
    });
});

router.get("/blog", function(req, res, next) {
  models.blog
    .findAll({
      where: {
        Deleted: null
      }
    })
    .then(blogFound => {
      res.render("blog", {
        blog: blogFound
      });
    });
});

router.get("/comments", function(req, res, next) {
  models.comments.findAll({}).then(commentsFound => {
    res.render("comments", {
      comments: commentsFound
    });
  });
});

router.get("/comments:id", (req, res) => {
  let Id = parseInt(req.params.id);
  models.comments
    .find({
      where: {
        Id: id
      },
      include: [models.blog]
    })
    .then(comments => {
      res.render("specificComment", {
        Comment: comments.Comment,
        UserName: comments.UserName
      });
    });
});

router.put("/comments/:id", (req, res) => {
  let Id = parseInt(req.params.id);
  models.comments
    .update(
      {
        Comment: req.body.comment,
        UserName: req.body.userName
      },
      {
        where: {
          Id: id
        }
      }
    )
    .then(result => {
      res.send();
    });
});

router.delete("/comments/:id/delete", (req, res) => {
  let Id = parseInt(req.params.id);
  models.blog
    .update(
      {
        Deleted: "true"
      },
      {
        where: {
          Id: id
        }
      }
    )
    .then(blog => {
      models.comments
        .update(
          {
            Deleted: "true"
          },
          {
            where: {
              Id: id
            }
          }
        )
        .then(comments => {
          res.redirect("/comments");
        });
    });
});

router.get("/comments", function(req, res, next) {
  models.comments
    .findAll({
      where: {
        Deleted: null
      }
    })
    .then(commentsFound => {
      res.render("comments", {
        comments: commentsFound
      });
    });
});
