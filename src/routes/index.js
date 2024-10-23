const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.post('/users-list', (req, res) => {
  const usersList = req.body;
  console.log(usersList)

  res.send({
    message: 'New User was added to the list'
  });
});

module.exports = router;
