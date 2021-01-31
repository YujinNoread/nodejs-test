module.exports = (sequelize, DataTypes) => {
	const order_products = sequelize.define("order_products",{
		id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},
		order_id: {type:DataTypes.INTEGER.UNSIGNED, allowNull: false},	
		product_id: {type:DataTypes.INTEGER, allowNull: false},
		count: {type:DataTypes.INTEGER, allowNull: false},
		total_price: {type:DataTypes.DECIMAL(10,2), allowNull: false},
	});
	order_products.associate = models => {
		order_products.belongsTo(models.products,{
			foreignKey: 'product_id'
		})
	}
	return order_products;
};