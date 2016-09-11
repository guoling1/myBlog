var express = require('express');
var router = express.Router();

//注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{title:'用户注册'});
});

//登录
router.get('/login', function(req, res, next) {
  res.render('user/login',{title:'用户登录'});
});

//退出
router.get('/logout', function(req, res, next) {
  res.redirect('/')
});

module.exports = router;
