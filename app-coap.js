//引入 http
const express = require('express');
//引入 coap
const coap = require('coap');

//引入post请求解析中间件
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//引入设备数据库模型
const Monitor = require('./models/Monitor');

const passport = require('passport');


const app = express();

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 引入users.js
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const index = require('./routes/api/index');

//DB config
const db = require('./config/keys').mongoURI;


// Connect to mongodb
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));
//连接数据库
mongoose
.connect(
  //db
  db,
  { useNewUrlParser: true }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

//passport 初始化
app.use(passport.initialize());

require('./config/passport')(passport);

app.get("/",(req,res) => {
  res.send("Hello World!");
})

// 使用routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/index', index);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
