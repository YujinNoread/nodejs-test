const db = require("../models");
const check = require('./helpers');
const moment = require("moment");

exports.profile =  (req, res) => {
	const user_id = check.getUserId(req.headers.token);
	if(!user_id){
		return res.send({status:"error authorization"})
	}
	db.users.findOne({where: {user_id}})
	.then(user=> res.send({profile_info: {email: user.email, first_name: user.first_name, last_name: user.last_name},}))
	.catch(err=>console.log(err));
};
exports.orderCreate = async (req, res) => {
	const user_id = check.getUserId(req.headers.token);
	if(!user_id){
		return res.send({status:"error authorization"})
	}
	const {products} = req.body;
	const order = await db.orders.create({
		user_id,
		created_at: moment().format('YYYY-MM-DD HH:mm:ss')
	})
	for (const userProduct of products) {
		const product= await db.products.findOne({where: {id: userProduct.product_id}})
		await db.order_products.create({
			order_id: order.id,
			product_id: userProduct.product_id,
			count: userProduct.count,
			total_price: product.price * userProduct.count
		})
	}
	res.send({order:"created", order_id: order.id})
};
exports.orders = async (req, res) => {
	const user_id = check.getUserId(req.headers.token);
	if(!user_id){
		return res.send({status:"error authorization"})
	}
	var result=[];
	const orders = await db.orders.findAll({where: {user_id}})

	for (const order of orders) {
		const orderProducts = await db.order_products.findAll({
			attributes: ['product.id', 'product.name','order_products.count','order_products.total_price'],
			where: {order_id: order.id},
			include: {model: db.products, raw: true}
		});
		result.push({order_id: order.id, order_products: orderProducts})
	}
	res.send({orders: result})
};