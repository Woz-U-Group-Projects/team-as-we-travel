const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require('mysql')
const port = 5000;  
var Sequelize = require('sequelize');
app.use(bodyParser.json());
var models = require('./models');

const sequelize = new Sequelize( {
  host: 'blogs-comments.cjyyl4sipsn7.us-east-2.rds.amazonaws.com',
  dialect: 'mysql',
  port:  '3306',
  database: 'aswetravel',
  username: 'root',
  password: '123456789',
    
  });
  




sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  app.get("/blog", function(req, res, next) {
    models.blog
      .findAll({
        where: {
          Deleted: null
        }
      })
      .then(blog => {
        res.json("blog", {
          Id: Id,
          Title: Title,
          Blog: Blog
        });
      });
  });

  app.post('/blogPost', (req, res) => {
    models.blog
      .findOrCreate({
        where: {
         
          Blog: req.body.Blog,
          
          userName:req.body.userName,
          
          Title:req.body.Title
        
        
        }
      })
      .spread(function(result, created) {
        if (created) {
          res.redirect('/blog');
        } else {
          res.send('This artist already exists!');
        }
      });
  });

 

app.listen(port, () => console.log(`Server started on port ${port}`));

