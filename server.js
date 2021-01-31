const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const all = require('./routes/all.js');
const user = require('./routes/user.js');
app.use("/api", all);
app.use("/user", user);

db.sequelize.sync().then(()=>{
	app.listen(PORT, () => {
		console.log(`listening on: http://localhost:${PORT}`);
		
	})
})

