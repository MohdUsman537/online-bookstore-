const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error Creating Order", error);
    res.status(500).send({ message: "Failed to create order" });
  }
};
const getOrderBYEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    // console.log("Orders", orders);

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this email" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error Fetching Order", error);
    res.status(500).send({ message: "Failed to fetch order" });
  }
};

module.exports = {
  createAOrder,
  getOrderBYEmail,
};
