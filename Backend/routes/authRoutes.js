const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); 

// Sign up route
router.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).send('User created');
    } catch (error) {
      res.status(400).send('Error signing up');
    }
  });

// Sign in route
router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Received username:', username);
        console.log('Received password:', password);

        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found');
            return res.status(401).send('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);

        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        res.status(200).send({ message: 'Signed in successfully' });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(400).send('Error signing in');
    }
});

  module.exports = router;
  