module.exports = (sequelize, DataTypes) => {
	const products = sequelize.define("products",{
		id: {type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false},	
		name: {type:DataTypes.STRING, allowNull: false},
		description: {type: DataTypes.TEXT , allowNull: false},
		price: {type: DataTypes.DECIMAL(10, 2).UNSIGNED  , allowNull: false},
		category: {type: DataTypes.INTEGER , allowNull: false},
	});

	products.associate = models => {
		products.hasMany(models.order_products,{
			foreignKey: 'id'
		})
	}
	return products;
};