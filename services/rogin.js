const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModels = require('../models/rogin');
const { createError } = require('../middleware/createError');

const login = async (email, password) => {
  const existingUser = await userModels.getUserByEmail(email);
  const userId = existingUser.id;
  if (bcrypt.compareSync(password, existingUser.password)) {
    const token = jwt.sign({ id: existingUser.id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });
    const userDto = {
      id: userId,
      token,
    };
    return userDto;
  } else {
    const error = createError('LOGIN_FAIL', 400);
    throw error;
  }
};

module.exports = { login };
