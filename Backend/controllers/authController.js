
const User = require('../models/User'); 

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Sign-up error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
