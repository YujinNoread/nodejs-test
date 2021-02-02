const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

exports.getUserId =  (token, checkAdmin = false) => {
	if(!token){
		return false
	}

	const decoded = jwt.verify(token, secret);

	if((!decoded || !decoded.user_id) && (checkAdmin && !decoded.isAdmin)){
		return false
	}

	return decoded.user_id
};

exports.getAdminId =  (token) => {
	if(!token){
		return false
	}

	const decoded = jwt.verify(token, secret);

	if(!decoded || !decoded.user_id || !decoded.isAdmin){
		return false
	}

	return decoded.user_id;
};