const createAOrder = async (req, res) => {
    try {
        const newOrder=await Order(req.body)
        const savedOrder=await newOrder.save() 
        res.status(201).json(savedOrder)
    }
    catch (error) {
        console.error("Error Creating Order", error);
        res.status(500).send({ message: "Failed to create order" });
    }
}
module.exports = {
    createAOrder
}