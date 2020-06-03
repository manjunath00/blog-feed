exports.parseFieldsSignUp = (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dateOfBirth,
    password,
    categoryPreferences,
  } = req.body;

  const user = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    dateOfBirth: dateOfBirth.trim(),
    password: password.trim(),
    categoryPreferences: categoryPreferences.map((item) => item.trim()),
  };

  req.user = user;
  next();
};
