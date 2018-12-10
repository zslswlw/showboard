const DeviceInfo = require('./deviceInfo');

module.exports = {
    storeDeviceInfo(deID, receMsg, UpOrDown, proto){
        
        new DeviceInfo({
            "deviceID": deID,
            "deviceData": receMsg,
            "dataDir": UpOrDown,
            "protocol": proto,
            "date": (new Date().toLocaleString())
        }).save();
    }
}