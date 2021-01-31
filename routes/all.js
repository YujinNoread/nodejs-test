const express = require("express");
const router = express.Router();


const newUser = require("../controllers/newUser")

router.post("/registration", newUser.registration);
router.post("/login", newUser.login);
router.get("/products", newUser.products);
router.get("/productsCategories", newUser.productsCategories);

module.exports = router;