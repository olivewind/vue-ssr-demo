const express = require('express');
const router = express.Router();
const users = require('../../data/users');

// get single user
router.get('/:user_id', function(req, res, next) {
  const user = users.find(user => user.id === req.params.user_id);
  if (!user) {
    return res.status(404).send({code: 'no such user'})
  }
  res.send(user);
});

module.exports = router;
