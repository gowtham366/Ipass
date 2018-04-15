var Router = require('express').Router();
var Api = require('../models/api_collection');

Router.post('/',function(req, res, next){
  console.log(req.body);

  if(req.body.api != undefined)
  {
      var fieldVal =({
        field1: req.body.field1,
        field2: req.body.field2,
        field3: req.body.field3,
        field4: req.body.field4,
        field5: req.body.field5,
        field6: req.body.field6,
        lat: req.body.lat,
        lon: req.body.lon
      });

      Api.update({_id: req.body.api},{$push: {fieldValues: fieldVal}}, function(error, result){
        if (error) {
          res.status(500).send(false);
        }
        else if (result) {
          res.status(200).send(true);
        }
      });

  }
  else {
    res.status(500).send("API key not defined");
  }

});

module.exports = Router;
