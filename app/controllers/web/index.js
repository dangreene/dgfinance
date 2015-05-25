var getIndex = function (req, res, next) {
    res.render('index', {'title': 'Home'});
};


module.exports = {
    getIndex: getIndex
};
