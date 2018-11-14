const express = require('express');
const app = express();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'blogs-comments.cjyyl4sipsn7.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: '123456789',
  database: 'aswetravel'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})



