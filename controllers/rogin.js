const userService = require('../services/rogin');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password, 'sdasd');
    const { id, token } = await userService.login(email, password);

    return res.status(201).json({ id, token });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
// const login = async (req, res) => {
//   try {
//     const token = await userService.login(req.body);
//     res.status(201).json({ message: 'LOGIN SUCCESS', token });
//   } catch (errors) {
//     res.status(errors.statusCode || 500).json({ message: errors.message });
//   }
// };

module.exports = { login };
