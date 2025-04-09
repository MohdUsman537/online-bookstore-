
const express = require('express');
const { createAOrder, getOrderBYEmail } = require('./order.controller');
const router = express.Router();
router.post("/",createAOrder);
//get ordeers by email address
router.get("/email/:email",getOrderBYEmail);
module.exports = router;