const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require('mysql')
const port = 5000;  
var Sequelize = require('sequelize');
app.use(bodyParser.json());

const sequelize = new Sequelize('aswetravel', 'root', '123456789', {
  host: 'blogs-comments.cjyyl4sipsn7.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    router.get('/blog', function(req, res, next) {
      models.blogFound.findAll({}).then(blogAsPlainObject => {
        const mappedBlogs = blogAsPlainObject.map(blog => ({
          Id: blog.Id,
          Username: blog.userName,
          Title: blog.Title,
          Date: blog.Date,
  
          
        }));
        res.send(JSON.stringify(mappedBlogs));
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
          res.render("PostBlog", {
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
          res.render("Comments", {
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
    
  
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  router.get('/blog', function(req, res, next) {
    models.blogFound.findAll({}).then(blogAsPlainObject => {
      const mappedBlogs = blogAsPlainObject.map(blog => ({
        Id: blog.Id,
        Username: blog.userName,
        Title: blog.Title,
        Date: blog.Date,

        
      }));
      res.send(JSON.stringify(mappedBlogs));
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
        res.render("PostBlog", {
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
        res.render("Comments", {
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
  




app.listen(port, () => console.log(`Server started on port ${port}`));

