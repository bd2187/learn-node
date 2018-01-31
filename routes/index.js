const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // const brandon = { name: 'brandon', occupation: 'web developer', age: 25 };
  // console.log(req.query.name,  req.query.age);
  // res.json(brandon); 
  res.render('hello', {
    name: req.query.name,
    question: 'How are you?'
  });
});

router.get('/reverse/:name', function( req, res ) {
  const reversedName = [...req.params.name].reverse().join('');
  const finalName = reversedName[0].toUpperCase() + reversedName.slice(1);

  res.send(`Hello, ${finalName}`);
});


module.exports = router;
