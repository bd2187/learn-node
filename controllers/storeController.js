exports.homePage = function(req, res) { 
    res.render('index', {
      title: 'Home'
    });    
};

exports.addStore = function(req, res) {
  res.render('editStore', {
    title: 'Add Store'
  });
}

exports.createStore = function(req, res) {
  res.json(req.body);
}

























// exports.addStore = function(req, res) {
//   res.render('editStore', {
//     title: 'Add Store'
//   });
// }

// exports.createStore = function(req, res) {
//   res.json(req.body);
// }