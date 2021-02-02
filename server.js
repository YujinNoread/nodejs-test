const express = require("express");
const app = express();
const db = require("./models");
const all = require('./routes/all.js');
const user = require('./routes/user.js');
const admin = require('./routes/admin.js');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", (req, res, next)=>{
	if (user.dshjfghjdsgfdhjs){
		return next();
	}

	res.send(401);
},all);
app.use("/user", user);
app.use("/admin", admin);

/**
 * users
 * /api/v1/users (GET, POST)
 * /api/v1/users/{id} (GET, DELETE, PUT)
 * 
 * profile
 * /api/v1/profile (GET)
 * 
 * products
 * /api/v1/products (GET, POST - admin)
 * /api/v1/products/{id} (GET, DELETE - admin, PUT - admin)
 * 
 * products categories
 * /api/v1/products-categories (GET, POST - admin)
 * /api/v1/products-categories/{id} (GET, DELETE - admin, PUT - admin)
 * 
 * auth
 * /api/v1/auth/login (POST - login)
 * /api/v1/auth/registration (POST)
 * 
 * orders
 * /api/v1/orders (GET - user/admin, POST - user/admin)
 * /api/v1/orders/{id} (GET, DELETE - admin, PUT - admin)
 * 
 * {
 * user_id: 10,
 * products: [{id: 1, count: 10}, {id: 2, count: 20}] 
 * }
 * 
 * - проверку через мидлварь
 * - использование моделей, а не прямое обращение к бд
 * - пакет дот.енв
 * - единый стиль промисов
 * - глобальный обраточик исключенгий/ошибок
 * - разобраться с сохранением связей
 * - переделать роуты
 * - исключать повторение слова в урлах/классах/полях/переменных
 * - сохранение времени создания модели - автоматически
 * - сервисный слой
 * - избегать множества запросов к бд
 * - 
*/

db.sequelize.sync().then(()=>{
	app.listen(PORT, () => {
		console.log(`listening on: http://localhost:${PORT}`);
		
	})
})

