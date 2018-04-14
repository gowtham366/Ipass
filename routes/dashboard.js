var Router = require('express').Router();
var Api = require('../models/api_collection');

var gresult;
Router.use('/',function(req, res, next){
  console.log(req.body);
  Api.findOne({_id: req.body.api}, function(error, result){
    if (error) {
      res.status(500).json({
          status: false,
          message: "Error!!! Invalid API Key"
      });
    }
    else if (result.publicRprivate) {
      res.status(500).json({
          status: false,
          message: "Not a Private API Key"
      });
    }
    else {
      gresult = result;
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


Router.post('/makePublic', function(req, res, next){
  console.log(req.body);
  Api.update({_id:req.body.api},{$set:{ publicRprivate: req.body.status}}, function(err, result){
    if (err) {
      res.status(500).send("Status updation failed");
    }
    else if (result) {
      res.status(200).send("Status updated successfully!!!");
    }
  });
});

Router.post('/fieldName', function(req, res, next){
  console.log(req.body);
  var fieldName = req.body.fieldName;
  if (fieldName == "field1Name") {
    Api.update({_id:req.body.api},{$set:{  field1Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 1 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 1 name updated successfully!!!");
      }
    });
  }
  else if (fieldName == "field2Name") {
    Api.update({_id:req.body.api},{$set:{  field2Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 2 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 2 name updated successfully!!!");
      }
    });
  }
  else if (fieldName == "field3Name") {
    Api.update({_id:req.body.api},{$set:{  field3Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 3 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 3 name updated successfully!!!");
      }
    });
  }
  else if (fieldName == "field4Name") {
    Api.update({_id:req.body.api},{$set:{  field4Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 4 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 4 name updated successfully!!!");
      }
    });
  }
  else if (fieldName == "field5Name") {
    Api.update({_id:req.body.api},{$set:{  field5Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 5 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 5 name updated successfully!!!");
      }
    });
  }
  else if (fieldName == "field6Name") {
    Api.update({_id:req.body.api},{$set:{  field6Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Field 6 name updation failed");
      }
      else if (result) {
        res.status(200).send("Field 6 name updated successfully!!!");
      }
    });
  }
  else {
    res.status(500).send("Updation failed");
  }
});

Router.post('/switchState', function(req, res, next){
  console.log(req.body);
  var switchName = req.body.switchName;
  if (switchName == "switch1") {
    Api.update({_id:req.body.api},{$set:{ switch1 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 1 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 1 status updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch2") {
    Api.update({_id:req.body.api},{$set:{ switch2 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 2 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 2 status updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch3") {
    Api.update({_id:req.body.api},{$set:{ switch3 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 3 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 3 status updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch4") {
    Api.update({_id:req.body.api},{$set:{ switch4 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 4 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 4 status updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch5") {
    Api.update({_id:req.body.api},{$set:{ switch5 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 5 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 5 status updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch6") {
    Api.update({_id:req.body.api},{$set:{ switch6 : req.body.status}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 6 status updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 6 status updated successfully!!!");
      }
    });
  }
  else {
    res.status(500).send("Updation failed");
  }
});


//switch name
Router.post('/switchName', function(req, res, next){
  console.log(req.body);
  var switchName = req.body.switchName;
  if (switchName == "switch1Name") {
    Api.update({_id:req.body.api},{$set:{  switchName : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 1 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 1 name updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch2Name") {
    Api.update({_id:req.body.api},{$set:{  switch2Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 2 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 2 name updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch3Name") {
    Api.update({_id:req.body.api},{$set:{  switch3Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 3 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 3 name updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch4Name") {
    Api.update({_id:req.body.api},{$set:{  switch4Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 4 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 4 name updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch5Name") {
    Api.update({_id:req.body.api},{$set:{  switch5Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 5 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 5 name updated successfully!!!");
      }
    });
  }
  else if (switchName == "switch6Name") {
    Api.update({_id:req.body.api},{$set:{  switch6Name : req.body.name}}, function(err, result){
      if (err) {
        res.status(500).send("Switch 6 name updation failed");
      }
      else if (result) {
        res.status(200).send("Switch 6 name updated successfully!!!");
      }
    });
  }
  else {
    res.status(500).send("Updation failed");
  }
});


Router.post('/mapName', function(req, res, next){
  console.log(req.body);
  Api.update({_id:req.body.api},{$set:{ mapName : req.body.name}}, function(err, result){
    if (err) {
      res.status(500).send("Map name updation failed");
    }
    else if (result) {
      res.status(200).send("Map name updated successfully!!!");
    }
  });
});


Router.post('/test', function(req, res, next){
  console.log(req.body);
  res.status(200).send("HIiii");
});

module.exports = Router;
