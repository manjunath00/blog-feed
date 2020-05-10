const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getCategoryById } = require("../controllers/category");
const {
  getUserById,
  getUser,
  getAllUsers,
  deleteAnUser,
  parseFields,
  updateUser,
  checkCategoryExists,
  updateCategoryPref,
} = require("../controllers/user");

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// get a user
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

// get all users only if the user is admin
router.get("/user/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllUsers);

// delete an user
router.delete("/user/delete/:userId", isSignedIn, isAuthenticated, deleteAnUser);

// update name or phone except password
router.patch("/user/update/:userId", isSignedIn, isAuthenticated, parseFields, updateUser);

router.patch(
  "/user/categories/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  checkCategoryExists,
  updateCategoryPref
);

module.exports = router;
