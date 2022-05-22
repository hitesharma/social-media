import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../schemas/index.js';
import { resolvers } from '../resolvers/index.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
});

export default server;
