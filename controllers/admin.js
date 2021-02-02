const db = require("../models");
const check = require('./helpers');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const moment = require("moment");

exports.products =  async (req, res) => {
	const admin_id = check.getUserId(req.headers.token, true);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const products = await db.products.findAll()
	res.send({products: products})
};
exports.product =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const product_id = req.query.id
	const product = await db.products.findOne({where: {id: product_id}})
	res.send({product: product})
};
exports.productCreate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {name, description, price, category} = req.body
	const product = await db.products.create({
		name,
		description,
		price,
		category
	})
	res.send({product: product})
};
exports.productUpdate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {product_id, update} = req.body

	for(let element of update){
		const {column, value} = element;
		await db.products.update({[column] : value},{ where: { id: product_id} })
	}

	const product = await db.products.findOne({where: {id: product_id} })
	res.send({product: product})
};
exports.productDelete =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {product_id} = req.body
	await db.products.destroy({ where: { id: product_id} })
	res.send({status: "delete complete"})
};
exports.productsCategories =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const productsCategories = await db.products_categories.findAll()
	res.send({productsCategories: productsCategories})
};
exports.productCategories =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const productsCategories_id = req.query.productsCategories_id
	const productsCategories = await db.products_categories.findOne({where: {id: productsCategories_id}})
	
	res.send({productsCategories: productsCategories})
};
exports.productsCategoriesCreate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {name} = req.body
	const productsCategories = await db.products_categories.create({name})
	res.send({productsCategories: productsCategories})
};
exports.productsCategoriesUpdate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {productsCategories_id, update} = req.body

	for(let element of update){
		const {column, value} = element;
		await db.products_categories.update({[column] : value},{ where: { id: productsCategories_id} })
	}

	const productsCategories = await db.products_categories.findOne({where: {id: productsCategories_id} })
	res.send({productsCategories: productsCategories})
};
exports.productsCategoriesDelete =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {productsCategories_id} = req.body
	await db.products_categories.destroy({ where: { id: productsCategories_id} })
	res.send({status: "delete complete"})
};
exports.users =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const users = await db.users.findAll({
		attributes: {exclude:['password']}
	})
	
	res.send({users: users})
};
exports.user =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const user_id = req.query.id
	const user = await db.users.findOne({
		attributes: {exclude:['password']},
		where: {id: user_id}
	})
	res.send({user: user})
};
exports.userCreate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {email, first_name, last_name, password, user_group_id, admin} = req.body
	const hash = bcrypt.hashSync(password, saltRounds);
	const user = await db.users.create({
		email,
		first_name,
		last_name,
		password:hash,
		user_group_id,
		admin
	})
	delete user.dataValues.password
	res.send({user: user})
};
exports.userUpdate =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {user_id, update} = req.body

	for(let element of update){
		const {column, value} = element;
		await db.users.update({[column] : value},{ where: { id: user_id} })
	}
	const user = await db.users.findOne({where: {id: user_id},attributes: {exclude:['password']} })
	res.send({user: user})
};
exports.userDelete =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);

	if(!admin_id){
		return res.send({status:"error authorization"})
	}

	const {user_id} = req.body
	await db.users.destroy({ where: { id: user_id} })
	res.send({status: "delete complete"})
};
exports.orders = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	var result=[];
	const orders = await db.orders.findAll()

	for (const order of orders) {
		const orderProducts = await db.order_products.findAll({
			attributes: ['product.id', 'product.name','order_products.count','order_products.total_price'],
			where: {order_id: order.id},
			include: {model: db.products, raw: true}
		});
		result.push({order_id: order.id, order_user: order.user_id, order_products: orderProducts})
	}
	res.send({orders: result})
};
exports.order = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	var result=[];
	const order_id = req.query.id
	const orders = await db.orders.findAll({where: {id: order_id}})
	console.log(orders);
	
	for (const order of orders) {
		const orderProducts = await db.order_products.findAll({
			attributes: ['product.id', 'product.name','order_products.count','order_products.total_price'],
			where: {order_id: order.id},
			include: {model: db.products, raw: true}
		});
		result.push({order_id: order.id, order_user: order.user_id, order_products: orderProducts})
	}
	res.send({order: result})
};
exports.ordersCreate = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {user_id} = req.body;
	const order = await db.orders.create({
		user_id,
		created_at: moment().format('YYYY-MM-DD HH:mm:ss')
	})
	res.send({order: order})
};
exports.ordersProductsCreate = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {order_id, products} = req.body;
	for (const userProduct of products) {
		const product= await db.products.findOne({where: {id: userProduct.product_id}})
		await db.order_products.create({
			order_id: order_id,
			product_id: userProduct.product_id,
			count: userProduct.count,
			total_price: product.price * userProduct.count
		})
	}
	res.send({order:"created", order_id: order_id})
};
exports.ordersUpdate = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {order_id, update} = req.body

	for(let element of update){
		const {column, value} = element;
		await db.orders.update({[column] : value},{ where: { id: order_id} })
	}

	const order = await db.orders.findOne({where: {id: order_id} })
	res.send({order: order})
};
exports.ordersProductsUpdate = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {order_id, update} = req.body

	for(let element of update){
		const {product_id, column, value} = element;
		await db.order_products.update({[column] : value},{ where: {order_id, product_id} })
	}

	const ordersProducts = await db.order_products.findAll({where: {order_id} })
	res.send({ordersProducts: ordersProducts})
};
exports.ordersDelete = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {order_id} = req.body;
	await db.orders.destroy({ where: { id: order_id} })
	await db.order_products.destroy({ where: { order_id: order_id} })
	res.send({status: "delete complete"})
};
exports.ordersProductsDelete = async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
	if(!admin_id){
		return res.send({status:"error authorization"})
	}
	const {order_id, products} = req.body;
	for (const product of products) {
		await db.order_products.destroy({ where: {order_id: order_id, product_id: product.product_id} })
	}
	
	res.send({status: "delete complete"})
};
