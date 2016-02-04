const transactionCategoryService =
  require('../../services/transactionCategoryService');

function getCategories(req, res, next) {
  transactionCategoryService.getCategories()
    .then((categories) => {
      return res.json(categories);
    })
    .catch(next);
}

exports.getCategories = getCategories;
