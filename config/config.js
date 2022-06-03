const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: 'SolarSystemPlanets',
		host: process.env.HOSTNAME,
		dialect: 'mysql',
	},
};
