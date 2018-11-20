//server side app.js
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");

var indexRouter = require("./routes/index");

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up!!");
});

module.exports = app;
