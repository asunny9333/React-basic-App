// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


//api/orders - Used to  post data to database
router.post('/', async (req, res) => {
    try {
      const {cartItems, totalPrice } = req.body;
        const newOrder = new Order({ cartItems, totalPrice });
        await newOrder.save();
        res.status(201).json(newOrder);
      } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ error: 'An error occurred while saving the order.' });
      }
    });
  

module.exports = router;
