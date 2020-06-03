const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const { getUserById } = require("../controllers/user");

const {
  getAllCategory,
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.param("categoryId", getCategoryById);
router.param("userId", getUserById);

// read routes or get routes
router.get(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  getCategory
);

router.get("/category/:userId", isSignedIn, isAuthenticated, getAllCategory);

router.get("/category", getAllCategory);

// create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [
    check("categoryName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Category name should be atleast 3 characters"),
  ],
  createCategory
);

// update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [
    check("categoryName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Category name should be atleast 3 characters"),
  ],
  updateCategory
);

// delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteCategory
);

module.exports = router;
