const express = require('express');
const path = require('path');

const pathHelper = require(path.join('..', 'helper', 'pathHelper'));
const router = express.Router();

router.use((req, res, next) => {
  res.status(404).render(path.join('error', 'page-not-found'), {
    pageTitle: 'HealthApp - Page Not Found'
  });
});

module.exports = router;