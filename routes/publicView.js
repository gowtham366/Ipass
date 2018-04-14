var Router = require('express').Router();
var Api = require('../models/api_collection');

Router.use('/',function(req, res, next){
  console.log(req.body);
  Api.findOne({_id: req.body.api}, function(error, result){
    if (error) {
      res.status(500).json({
          status: false,
          message: "Error!!! Invalid API Key"
      });
    }
    else if (!result.publicRprivate) {
      res.status(500).json({
          status: false,
          message: "Not a Public API Key"
      });
    }
    else {
      next();
    }
  });

});

Router.post('/display',function(req, res, next){
  console.log(req.body);
  Api.findOne({_id: req.body.api}, function(error, result){
    if (error) {
      res.status(500).json({
          status: false,
          message: "Error!!! Invalid API Key"
      });
    }
    else if (result) {
      res.status(200).json({
          status: true,
          message: "Success!!!",
          obj: result
      });
    }
  });
});


module.exports = Router;
