const express = require('express');

const path = require('path');

// cousines
const adminCousines = require('./adminRoute');

const router = express.Router();

// get cousines
const cousines = adminCousines.cousines;

router.get('/', (req, res, next) => {
  res.render(path.join('user', 'index'));
});

module.exports = router;