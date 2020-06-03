const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const User = require("../models/user");

exports.signup = (req, res) => {
  // 0 get the array of errors if any any
  const errors = validationResult(req);

  // 1 check for valid form values
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param, 
    });
  }

  // 2. create a new user for given valid values
  const user = new User(req.user);

  // 3. save the new user to db
  user.save((err, user) => {
    // 3.1 if any error like reusing same email throw an error
    if (err) { 
      return res.status(400).json({
        err: "NOT able to save user in DB",
      });
    }

    // 3.2 on successfull saving send these details to frontend
    return res.status(200).json({
      name: user.name,
      email: user.name,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  // 1.check for correct form inputs
  const errors = validationResult(req);
  const { email, password } = req.body;

  // 2.If they are not empty throw an error
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  // 3.check for if the person exists in the database
  User.findOne({ email }, (error, user) => {
    console.log(user);
    // 3.1 if not throw an error
    if (error || !user) {
      return res.status(400).json({
        error: "User email doesnt exist",
      });
    }

    // 3.2 if user exists then verify the password. In case wrong password throw an error
    if (!user.authenticate(password)) {
      return res.status(401).json({
        message: "Email and Password donot match",
        // error: "Email and Password donot match",
      });
    }

    // 4 User signin success so create a token with secret
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    // 5 store the generated tokens in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });
    // 6 send response to frontend
    // console.log(user)
    const { _id, firstName, email, role } = user;
    return res.json({
      token,
      user: { _id, firstName, email, role },
    });
  });
};

exports.signout = (req, res) => {
  // 1 clear the token cookie
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};

exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

exports.isAuthenticated = (req, res, next) => {
  // if profile or req.auth is empty send error
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  // req.profile._id is an object & req.auth._is a string
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "No you are not ADMIN. Access denied",
    });
  }
  next();
};
