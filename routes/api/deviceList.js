const express = require('express');
const router = express.Router();
const passport =require('passport');
const DevicesDetailInfo =  require('../../models/deviceDetailInfo');

router.get(
    '/', 
    passport.authenticate('jwt', {session: false}), 
    (req, res) => {
        DevicesDetailInfo.find()
            .then(devices =>{
                if(!devices){
                    res.status(400).json("没有任何内容！");
                }
                res.json(devices);
            })
            .catch(err => res.status(404).json(err));
})

module.exports = router;