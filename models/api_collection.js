var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const format = require("node.date-time");
var mongooseUniqueValidator = require('mongoose-unique-validator');

var FieldValues = new Schema({
  field1: {
    type: String,
    default: null
  },
  field2: {
    type: String,
    default: null
  },
  field3: {
    type: String,
    default: null
  },
  field4: {
    type: String,
    default: null
  },
  field5: {
    type: String,
    default: null
  },
  field6: {
    type: String,
    default: null
  },
  lat: {
    type: String,
    default: null
  },
  lon: {
    type: String,
    default: null
  },
  time: {
    type: String,
    default: new Date().format("Y-MM-dd HH:mm:SS")
  }
});

var api = new Schema({
    _id: {
        type: String,
        required: true
    },
    api: {
      type: String,
      required: true,
      unique: true
    },
    publicRprivate: {
      type: Boolean,
      default: false
    },
    field1Name: {
      type: String,
      default: "Field 1"
    },
    field2Name: {
      type: String,
      default: "Field 2"
    },
    field3Name: {
      type: String,
      default: "Field 3"
    },
    field4Name: {
      type: String,
      default: "Field 4"
    },
    field5Name: {
      type: String,
      default: "Field 5"
    },
    field6Name: {
      type: String,
      default: "Field 6"
    },
    switch1: {
      type: Boolean,
      default: false
    },
    switch2: {
      type: Boolean,
      default: false
    },
    switch3: {
      type: Boolean,
      default: false
    },
    switch4: {
      type: Boolean,
      default: false
    },
    switch5: {
      type: Boolean,
      default: false
    },
    switch6: {
      type: Boolean,
      default: false
    },
    switch1Name: {
      type: String,
      default: "Switch 1"
    },
    switch2Name: {
      type: String,
      default: "Switch 2"
    },
    switch3Name: {
      type: String,
      default: "Switch 3"
    },
    switch4Name: {
      type: String,
      default: "Switch 4"
    },
    switch5Name: {
      type: String,
      default: "Switch 5"
    },
    switch6Name: {
      type: String,
      default: "Switch 6"
    },
    mapName: {
      type: String,
      default: "My Map"
    },
    fieldValues: [FieldValues]
})
api.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('apidetails',api);
