const express = require('express');
const router = express.Router();
const passport = require('passport');
const deviceDetailInfo = require('../../models/deviceDetailInfo');


router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const deviceDetailInfoFields = {};
  
      if (req.body.deviceID) deviceDetailInfoFields.deviceID = req.body.deviceID;
      if (req.body.devicePwd) deviceDetailInfoFields.devicePwd = req.body.devicePwd;
      if (req.body.deviceName) deviceDetailInfoFields.deviceName = req.body.deviceName;
      if (req.body.deviceAddr) deviceDetailInfoFields.deviceAddr = req.body.deviceAddr;
      if (req.body.deviceDetail) deviceDetailInfoFields.deviceDetail = req.body.deviceDetail;
  
      new deviceDetailInfo(deviceDetailInfoFields).save().then(deviceDetailInfo => {
        res.json(deviceDetailInfo);
      });
    }
  );

module.exports = router;