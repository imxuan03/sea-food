const bcrypt = require('bcrypt');

const generateString = require("../../helpers/generateString");

const Account = require('../../models/account.model');
const ApiError = require('../../helpers/api-error');

// [POST] /admin/auth/login
module.exports.loginPost = async (req, res, next) => {
  try {
    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;

    const user = await Account.findOne({ email: enteredEmail });

    if (!user) {
      res.status(404).json({ message: `wrong email!`})
      return;
    }

    if (!enteredPassword) {
      res.status(404).json({ message: `wrong password!`})
      return;
    }

    if (enteredPassword != user.password ) {
      res.status(404).json({ message: `wrong password!`})
      return;
    }

    res.cookie("token", user.token);
    res.status(200).json({ message: `login account successfully!`})

  } catch (error) {
    console.log('error:', error);
    return next(new ApiError(500, error));
  }
};


// [GET] /admin/auth/logout
module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: `logout account successfully!`})
}

// [POST] /admin/auth/register
module.exports.register = async (req, res, next) => {
  try {
      req.body.token = generateString.generateRandomString(20);
      const user = await Account.create(req.body);
      res.status(200).json({ message: 'register account successfully', user});
  } catch (error) {
      res.status(500).json({ massage: `Error! ${error}` });
  }
}
