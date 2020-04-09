const express = require('express');
const router = express.Router();
const login = 'Admin1';
const password = 'Admin2';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: "Nibylandia.pl"
  });
});
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Zaloguj'
  });
});
router.post('/login', (req, res) => {
  const body = req.body;
  if (body.login === login || body.password === password) {
    req.session.admin = 1;
    res.redirect('/admin')
  } else {
    res.redirect('/login')
  }
});





module.exports = router;