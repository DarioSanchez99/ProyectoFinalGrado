const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res,next) => {
  res.render('index');
});

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', passport.authenticate('local-register', {
  successRedirect: '/profile',
  failureRedirect: '/register',
  failureFlash: true
})); 

router.get('/login', (req, res,next) => {
  res.render('login');
});


router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/logout', (req, res,next) => {
  req.logout();
  res.redirect('/');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

module.exports = router;