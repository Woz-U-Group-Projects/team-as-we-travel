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

 

app.listen(port, () => console.log(`Server started on port ${port}`));

