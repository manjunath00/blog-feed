const Category = require("../models/category");

//middleware to fill the category
exports.getCategoryById = (req, res, next, categoryId) => {
  Category.findById(categoryId).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }

    req.category = category;
  });

  next();
};

// create category
exports.createCategory = (req, res) => {
  const newCategory = { categoryName: req.body.categoryName };

  const category = new Category(newCategory);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }

    return res.json({ category });
  });
};

// get category
exports.getCategory = (req, res) => {
  return res.json(req.category);
};

// get all category
exports.getAllCategory = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "No categories found",
      });
    }

    return res.json(categories);
  });
};

// update category
exports.updateCategory = (req, res) => {
  const category = req.category;
  category.categoryName = req.body.categoryName;
  category.save((err, updatedCategory) => {
    if (err) {
      return res.send(400).json({ error: "Failed to update category" });
    }

    return res.json(updatedCategory);
  });
};

// delete category
exports.deleteCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({ error: "failed to remove the category" });
    }

    return res.json({ message: `${category.name} successfully deleted` });
  });
};

// add an category from the user's preferred categories

// remove a category from the user's preferred categories
