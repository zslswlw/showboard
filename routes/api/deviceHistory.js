const express = require('express');
const router = express.Router();
const passport =require('passport');
const Deviceinfo =  require('../../models/deviceInfo');

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Deviceinfo.find()
            .then(deviceinfo => {
                if(!deviceinfo){
                    return res.status(404).json('没有任何内容');
                }else{
                    res.json(deviceinfo);
                }
            })
            .catch(err => res.status(404).json(err));
   
});



module.exports = router;