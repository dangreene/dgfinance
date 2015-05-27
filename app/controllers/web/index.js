exports.getIndex = function(req, res, next) {
  res.render('index', {
    'title': 'Home'
  });
};
