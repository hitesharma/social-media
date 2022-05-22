import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../schema/typeDefs.js';
import { resolvers } from '../resolver/index.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
});

export default server;
