const userService = require('../services/rogin');

const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const { id, token } = await userService.login(email, password);
  
      return res.status(201).json({ id, token });
    } catch (error) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  };

module.exports = { loginController };
