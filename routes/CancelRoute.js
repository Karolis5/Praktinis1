const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Define route to cancel an order
router.post('/cancelorder', async (req, res) => {
  try {
    const { orderId } = req.body;

    // Find the order by ID and update the status to "cancelled"
    const order = await Order.findByIdAndUpdate(orderId, { status: 'cancelled' });

    // If the order is not found, return an error response
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Return a success response
    return res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// Export the router
module.exports = router;