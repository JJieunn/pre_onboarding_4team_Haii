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

// const login = async body => {
//   const { email, password } = body;
//   console.log(email, password, 'test');
//   const users = await userModels.getUserByEmail(email);
//   if (!users) {
//     const error = new Error('INVALID_USER');
//     error.statusCode = 400;
//     throw error;
//   }
//   const isCorrect = await bcrypt.compare(password, users.password);
//   if (!isCorrect) {
//     const error = new Error('INVALID_USER');
//     error.statusCode = 400;
//     throw error;
//   }

//   const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
//   return token;
// };
module.exports = { login };
