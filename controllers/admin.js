const db = require("../models");
const check = require('./helpers');

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