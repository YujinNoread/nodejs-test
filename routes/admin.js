const express = require("express");
const router = express.Router();


const admin = require("../controllers/admin")

router.get("/products", admin.products);
router.get("/product/", admin.product);
router.post("/product/", admin.productCreate);
router.put("/product/", admin.productUpdate);
router.delete("/product/", admin.productDelete);
router.get("/products_categories/", admin.productsCategories);
router.get("/product_categories/", admin.productCategories);
router.post("/products_categories/", admin.productsCategoriesCreate);
router.put("/products_categories/", admin.productsCategoriesUpdate);
router.delete("/products_categories/", admin.productsCategoriesDelete);
// router.post("/login", newUser.login);
// router.get("/products", newUser.products);
// router.get("/productsCategories", newUser.productsCategories);

module.exports = router;