const router = require('express').Router();

const Users = require('./users-model.js');
const authenticated = require('../auth/authenticate-middleware');

router.get('/', authenticated, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;