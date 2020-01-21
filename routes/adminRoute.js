const express = require('express');

const router = express.Router();

// dummy for cousines
const cousines = [{
    id: 1,
    name: 'Chinese'
  },
  {
    id: 1,
    name: 'British'
  },
  {
    id: 1,
    name: 'Indian'
  }
]

router.get('/add-product', (req, res, next) => {
  res.send(`<form action='/admin/add-product' method='POST'>
      <input type='text' name='title'>
      <button type='submit'>Submit</button>
    </form>`);
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  cousines.push(req.body.title);
  res.redirect('/');
});

exports.routes = router;
exports.cousines = cousines;