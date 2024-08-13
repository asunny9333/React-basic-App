const Order = require('../models/Order');
const User = require('../models/User'); 
const Product = require('../models/Product');
// Create a new order
const createOrder = async (req, res) => {
  try {
    const { userId, cartItems, totalPrice } = req.body;

  
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

  
    const order = new Order({
      user: userId,
      products: cartItems.map(item => ({
        product: item.productId,
        quantity: item.quantity,
      })),
      totalPrice,
    });

    await order.save();
    res.status(201).send(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send('Error creating order');
  }
};

const placeOrder = async (req, res) => {
  try {
      const { user, products, totalPrice } = req.body;
      const newOrder = new Order({ user, products, totalPrice });
      await newOrder.save();
      res.status(201).json(newOrder);
  } catch (error) {
      res.status(400).json({ message: 'Error placing order' });
  }
};

module.exports = {
  createOrder,
  placeOrder, // Ensure placeOrder is exported
};
