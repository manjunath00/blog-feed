const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signout, signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("firstName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters long"),
    check("email")
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter a valid email"),
    check("password")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Password must be atleast 3 characters long"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email")
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter a valid email"),
    check("password")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Password must be atleast 3 characters long"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
