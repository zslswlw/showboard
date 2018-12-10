const mongoose = require('mongoose');
const Schame = mongoose.Schema;

const deviceInfoSchema =new Schame({
    deviceID: String,
    devicePwd: String,
    deviceName: String,
    deviceAddr: String,
    deviceDetail: String
})

module.exports = DevicesDetailInfo = mongoose.model('devicesDetailInfo', deviceInfoSchema)