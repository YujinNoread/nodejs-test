const jwt = require('jsonwebtoken');
const privatKey = 'shhhhh';
exports.getUserId =  (token) => {
	if(!token){
		return false
	}
	const decoded = jwt.verify(token, privatKey);
	if(!decoded || !decoded.user_id){
		return false
	}
	return decoded.user_id
};
exports.getAdminId =  (token) => {
	if(!token){
		return false
	}
	const decoded = jwt.verify(token, privatKey);
	if(!decoded || !decoded.user_id || !decoded.isAdmin){
		return false
	}
	return decoded.user_id;
};