const User = require("../models/user");
const Category = require("../models/category");
const { validationResult } = require("express-validator");

// middleware to populate req.profile
exports.getUserById = (req, res, next, userId) => {
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      console.log(err, user);
      return res.status(400).json({
        error: "No user found in db",
      });
    }

    req.profile = user;
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    next();
  });
};

// get user
exports.getUser = (req, res) => {
  return res.json(req.profile);
};

// get all users
exports.getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({ error: "Failed to get all users" });
    }

    return res.json(users);
  });
};

// middleware to update the only some fields
exports.parseFields = (req, res, next) => {
  const { body } = req;
  const newFields = {};

  if (body.firstName) {
    newFields.firstName = body.firstName;
  }

  if (body.lastName) {
    newFields.lastName = body.lastName;
  }

  if (body.email) {
    newFields.email = body.email;
  }

  if (body.phone) {
    newFields.phone = body.phone;
  }

  if (body.dateOfBirth) {
    newFields.dateOfBirth = body.dateOfBirth;
  }

  if (body.password) {
    newFields.password = body.password;
  }

  req.newFields = newFields;
  next();
};

// update user's password, name
exports.updateUser = (req, res) => {
  console.log(req.newFields);
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.newFields },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorised to update the information",
        });
      }

      user.salt = undefined;
      user.encry_password = undefined;
      res.json({ user });
    }
  );
};

// delete an user
exports.deleteAnUser = (req, res) => {
  const profile = req.profile;
  profile.remove((err, status) => {
    if (err) {
      return res.status(400).json({ error: "Failed to remove an user" });
    }

    return res.json({ status });
  });
};

// middleware to update the category preferences array
exports.checkCategoryExists = (req, res, next) => {
  let userCategories = [...req.profile.categoryPreferences];
  const { categoryStatus } = req.body;

  if (categoryStatus && req.category) {
    userCategories.push(req.category.id);
  } else if (!categoryStatus && req.category) {
    userCategories = userCategories.filter((id) => id != req.category.id);
  }

  req.userCategories = [...new Set(userCategories)];
  next();
};

// add a categories
exports.updateCategoryPref = (req, res) => {
  // check if the user wants to remove the category or add the category
  const categoryPreferences = req.userCategories;
  const status = req.body.categoryStatus ? "added" : "removed";
  User.findOneAndUpdate(
    {
      _id: req.profile._id,
    },
    { $set: { categoryPreferences: categoryPreferences } },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({ error: "Unable to update the list" });
      }
      return res.json({
        message: `${req.category.categoryName} successfully ${status}`,
      });
    }
  );
};
