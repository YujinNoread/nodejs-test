const db = require("../models");
const check = require('./helpers');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.products =  async (req, res) => {
	const admin_id = check.getAdminId(req.headers.token);
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