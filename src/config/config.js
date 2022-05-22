import dotenv from 'dotenv';
dotenv.config();

export default {
	env: process.env.NODE_ENV,
	port: process.env.PORT || 8080,
	jwtKey: process.env.JWTKEY,
	mongoose: {
		url: process.env.DB_STRING,
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	},
};
