const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MonitorSchema = new Schema({
  id: {
      type: Number
  },
  device_id: {
       type: String
  },
  temp: {
    type: Number
  },
  hum: {
    type: Number
  },
  light: {
    type: Number
  },
  time: {
    type: Date,
    default: Date.now
  },
 
});

module.exports = Monitor = mongoose.model('monitor', MonitorSchema);
