const express = require('express');
var router = express.Router();
const app = express();
const bodyParser = require('body-parser');
var mysql = require('mysql')
const port = 5000;  
var Sequelize = require('sequelize');
app.use(bodyParser.json());
var models = require('./models');

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up!!");
});



//sequelize
 // .authenticate()
 // .then(() => {
  //  console.log('Connection has been established successfully.');  
   
 // })
  //.catch(err => {
   // console.error('Unable to connect to the database:', err);
  //});

  app.get("/blogs", function(req, res, next) {
    models.blogs
      .findAll({
        where: {
          Deleted: null
        }
      })
      .then(blogs => {
        res.send(blogs);
      });
  });



  app.post('/blogPost', (req, res) => {
    models.blogs
      .findOrCreate({
        where: {
         
          Blog: req.body.blog,
          
          userName:req.body.userName,
          
          Title:req.body.title,
         
          Date: ('NOW'),
        
        }
      })
      .spread(function(result, created) {
        if (created) {
          res.redirect('/blogs');
        } else {
          res.send('This blog already exists!');
        }
      });
  });

 

app.listen(port, () => console.log(`Server started on port ${port}`));

