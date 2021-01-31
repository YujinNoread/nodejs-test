const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

router.get("/profile", user.profile);
router.post("/order/create", user.orderCreate);
router.get("/orders", user.orders);

module.exports = router;