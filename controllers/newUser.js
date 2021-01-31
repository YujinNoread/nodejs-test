const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privatKey = 'shhhhh';

exports.registration =  (req, res) => {
	const {email,first_name,last_name,password} = req.body;
	const hash = bcrypt.hashSync(password, saltRounds);
	db.users.create({
		email,
		first_name,
		last_name,
		password:hash,
		user_group_id: 1,
		admin: 0
	}).then(newUser => res.send({registration: "complete", login: newUser.email}))
	.catch(err=>console.log(err));
};
exports.login =  (req, res) => {
	const {email,password} = req.body
	db.users.findOne({where: {email: email}}).then(user=>{
		if(!user || !bcrypt.compareSync(password, user.password)){
			return res.send({status: res.status})
		}
		const token = jwt.sign({ user_id: user.id, isAdmin: user.admin}, privatKey);
		res.send({login:"login success", token:token});
	}).catch(err=>console.log(err));
};
exports.products =  (req, res) => {
	db.products.findAll().then(products=>{
		res.send(products);
	}).catch(err=>console.log(err));
};
exports.productsCategories =  (req, res) => {
	db.products_categories.findAll().then(productsCategories=>{
		res.send(productsCategories);
	}).catch(err=>console.log(err));
};