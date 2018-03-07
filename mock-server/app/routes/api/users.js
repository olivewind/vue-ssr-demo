const express = require('express');
const users = require('../../data/users');
const router = express.Router();

// get all users
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
