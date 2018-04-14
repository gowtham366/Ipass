var Router = require('express').Router();
var User = require('../models/user_schema');
var Api = require('../models/api_collection');
// const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const requestIp = require('request-ip');
var mailer = require('node-mailer');

Router.post('/',(req, res, next) => {
  // const cipher = crypto.createCipher('aes192', 'password');
  // let encrypted = cipher.update(req.body.password, 'utf8', 'hex');
  // encrypted = cipher.final('hex');
  //
  // let password = encrypted;

  var email = req.body.email;
  var len = email.length;
  len = len.toString();
  var apiKey = "Ipass"+len+req.body.firstName.charAt(0)+req.body.lastName.charAt(0);
  var user = new User({
    _id: email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: email,
    api: apiKey,
    password: bcrypt.hashSync(req.body.password, 10),
    mobile: parseInt(req.body.mobile),
    createdIpAddress: requestIp.getClientIp(req)
  })
  user.save(function(err, result) {
    if(err) {
      console.log(err);
      res.status(500).json({
          status: false,
          message: 'An error occured while creating',
          error: err
      });
    }
    else{
      console.log(result);
      var apii = new Api({
        _id: apiKey,
        api: apiKey
      });

      apii.save(function(error,result){
        if (error) {
          console.log("error->",error);
          res.status(500).json({
              status: false,
              message: 'An error occured while creating',
              error: err
          });
        }// if
        else {
          console.log(result);
          // new mailer.Mail({
          //   	from: 'noreply@domain.com',
          //   	to: email,
          //   	subject: 'Your API Key for IPASS!!!',
          //   	body: 'Name: '+ req.body.firstName+', API Key: '+ apiKey,
          //   	callback: function(err, data){
          //   		console.log(err);
          //   		console.log(data);
          //   	}
          //   });
          res.status(201).json({
              status: true,
              message: 'User created successfully',
              obj: result,
              api: result.api          
          });//res json
        }// else
      });// apii save
    }
  });
});

Router.post('/signin', function(req, res, next) {

  User.findOne({email: req.body.email} , function(err, result) {
    if(err) {
      console.log(err);
      res.status(500).json({
          status: false,
          message: 'An error occured while creating',
          error: err
      });
    }
    if(result === null) {
      res.status(401).json({
          status: false,
          message: 'Check your mail ID/ password'
      });
    }
    else {
      if(!bcrypt.compareSync(req.body.password, result.password)) {
        res.status(401).json({
            status: false,
            message: 'Check your mail ID/ password'
        });
      }
      else {
        // token creation
        var token = jwt.sign({user: result}, 'MyS3CR3T', {expiresIn: 7200});
        res.status(200).json({
            status: true,
            message: 'Login Successful',
            token: token,
            apiKey: result._id,
            name: result.firstName
        });
      }//inner else
    }//outer else
  });
});

module.exports = Router;
