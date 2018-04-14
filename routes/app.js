var Router = require('express').Router();
Router.get('/',function(req, res, next){
  res.status(200).send("App Running!!!");
});

module.exports = Router;
