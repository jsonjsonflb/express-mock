const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  if (req.method == 'OPTIONS') res.send(200);
  /*让options请求快速返回*/ else next();
});
apiMocker(app, path.resolve('./mocker/mocker.js'));
app.listen(4444, () => {
  console.log('start at 4444');
});
