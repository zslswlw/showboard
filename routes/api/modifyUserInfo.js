const express = require('express');
const router = express.Router();
const passport =require('passport');
const user =  require('../../models/User');
const ids =  require('../../models/ids');


router.post('/', passport.authenticate('jwt', {session: false}), (req, res) =>{
    const updateParam = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone,
        userQQ: req.body.userQQ,
        userAdd: req.body.userAdd
    };
    user.findOneAndUpdate(updateParam.userName, {$set: updateParam}, {new: true}).then(user => {
        if(user){
            res.json(user);
        }
    });
})