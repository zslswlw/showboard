const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceInfoSchema = new Schema({
    "deviceID": String,
    "deviceData": String,
    "dataDir": String,
    "protocol": String,
    "date": String
})

module.exports = DeviceInfo = mongoose.model('deviceInfo',deviceInfoSchema)