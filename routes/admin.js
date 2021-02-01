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
router.get("/users", admin.users);
router.get("/user", admin.user);
router.post("/user", admin.userCreate);
router.put("/user", admin.userUpdate);
router.delete("/user", admin.userDelete);
router.get("/orders", admin.orders);
router.get("/order", admin.order);
router.post("/orders", admin.ordersCreate);
router.post("/orders/order_products", admin.ordersProductsCreate);
router.put("/orders", admin.ordersUpdate);
router.put("/orders/order_products", admin.ordersProductsUpdate);
router.delete("/orders", admin.ordersDelete);
router.delete("/orders/order_products", admin.ordersProductsDelete);

module.exports = router;