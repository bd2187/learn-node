const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

router.get('/reverse/:name', function( req, res ) {
  const reversedName = [...req.params.name].reverse().join('');
  const finalName = reversedName[0].toUpperCase() + reversedName.slice(1);

  res.send(`Hello, ${finalName}`);
});

module.exports = router;
