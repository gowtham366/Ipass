var Router = require('express').Router();
var Api = require('../models/api_collection');

Router.post('/',function(req, res, next){
  console.log(req.body);

  if(req.body.api != undefined)
  {
    Api.findOne({_id: req.body.api}, function(error, result){
      if (error) {
        res.status(500).send("error");
      }
      else if (result) {
        var response = result.switch1+" "+result.switch2+" "+result.switch3+" "+result.switch4+" "+result.switch5+" "+result.switch6;
        res.status(200).send(response);
      }
    });
  }
  else {
    res.status(500).send("API key not defined");
  }
});

module.exports = Router;
