const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render(path.join('index', 'home'));
});

module.exports = router;