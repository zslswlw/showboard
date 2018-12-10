//建立路由对象
const express = require('express');
const router = express.Router();
const passport = require('passport');
// //建立mongoose对象
// const mongoose = require('mongoose');

const Monitor = require('../../models/Monitor');



//var mysql = require('mysql');


router.post(
    '/add',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const MonitorsFields = {};
  
      if (req.body.id) MonitorsFields.id = req.body.id;
      if (req.body.device_id) MonitorsFields.device_id = req.body.device_id;
      if (req.body.temp) MonitorsFields.temp = req.body.temp;
      if (req.body.hum) MonitorsFields.hum = req.body.hum;
      if (req.body.light) MonitorsFields.light = req.body.light;
      //if (req.body.remark) Monitors.remark = req.body.remark;
  
      new Monitor(MonitorsFields).save().then(profile => {
        res.json(profile);
      });
    }
  );

router.get(
  '/test', 
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    const hello = 'Hello IoT Mircosystem';
    //res.render('test.html', {hello: hello});
    res.json({msg: hello});
});

// router.get(
//   '/', 
//   passport.authenticate('jwt', { session: false }),
//   function (req, res) {
//   get_device_list(function(rows){
//     var device_id = rows[0].device_id
//     var url = '/devices/' + device_id + '/data.json';
//     //res.render('admin.html', {url: url, device_id: device_id, devices: rows});
//     res.json({url: url, device_id: device_id, devices: rows});		
//   })
// });


router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Monitor.find()
      .then(result => {
        if (!result) {
          return res.status(404).json('没有任何内容');
        }

        res.json(result);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.get(
  '/devices/:device_id/page', 
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
  var device_id = req.params.device_id;
 // var device_id = req.body.device_id;
  var url = '/devices/' + device_id +'/data.json';
  get_device_list(function(rows){
    //res.render('admin.html', {url: url, device_id: device_id, devices: rows});
    res.json({url: url, device_id: device_id, devices: rows});
  })
});

router.get(
  '/devices/:device_id/data.json', 
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
  console.log('------------------------------');
  console.log('get device json');
  var device_id = req.params.device_id;
  //const device_id =req.body.device_id;
  //var offset = parseInt(req.query.offset) || 0;
  const offset = parseInt(req.body.offset) || 0;
  var limit = parseInt(req.query.limit) || 10;
  var total = 0;
  //var total ;
  var rows = null;

  console.log('device_id: ' + device_id);
  console.log('offset: ' + offset);
  console.log('limit: ' + limit);

  

  //在数据库中查找某设备数据条数
  
  // Monitor.count({device_id : req.params.device_id},(err, count) => {
  //   if(err){
  //       res.status(404).json(err);
  //   }else{
  //       total = count;
  //       console.log(total);
  //   }
  // });
    // .then(count => {
    //     if(!count){
    //         return res.status(404).json('没有任何内容');
    //     }
    //     //res.json(result)
    //     total  = count;
    //     //res.json({total:total, rows:result});
    //     //res.json({total:total});
    // });
    //.catch(err => res.status(404).json(err));

//   conn.query('SELECT aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(*) as total FROM sensor_history WHERE device_id=?', 
//     [device_id],
//     function(err, result) {
//       total = result[0].total;
//   });


// 在数据库中查找某设备的记录，并按指定的起始记录（默认为0）和需要的条数（默认为10）排序
Monitor.find({device_id : req.params.device_id})
    .then(result => {
        if(!result){
            return res.status(404).json('没有任何内容');
        }

        res.json({total: result.length,rows: result});
        //this.rows = result;
    })
    .catch(err => res.status(404).json(err));
// res.json({total:total, rows:rows});    
//   conn.query('SELECT * FROM sensor_history WHERE device_id=? order by id desc limit ?, ?', 
//     [device_id, offset, limit],
//     function(err, result) {
//       rows = result;
//   });

//   conn.end(function(err) {
     //res.json({total:total, rows:rows});
//   });
//console.log("2: "+total);
});

// function newFunction(total) {
//     total = "ddf";
//     return total;
// }

function get_device_list(callback) {
  Monitor.find({},{'device_id':1})
    .then(result => callback(result));
  
//     var conn = mysql.createConnection(config);
//   conn.connect();

//   conn.query("SELECT DISTINCT device_id FROM sensor_history",
//     function(err, rows) {
//       callback(rows);
//   });

//   conn.end();
}
module.exports = router;
