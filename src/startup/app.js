import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../schemas/index.js';
import { resolvers } from '../resolvers/index.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	context: async ({ req }) => {
		// Get the user token from the headers.
		const token = req.headers.authorization || '';
		if (!token) throw new Error('token not defined');
		// Try to retrieve a user with the token
		// const user = getUser(token);

		// Add the user to the context
		// return { user };
		let user = await jwt.verify(token, config.jwtKey);
		// if (!user)
		// 	throw new AuthenticationError(
		// 		'you must be logged in to query this schema'
		// 	);
		return { user };
	},
});

export default server;
