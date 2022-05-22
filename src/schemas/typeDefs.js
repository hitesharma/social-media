import { gql } from 'apollo-server';

const typeDefs = gql`
	type User {
		_id: ID
		name: String
		username: String
		email: String
		password: String
		phoneNo: String
		isEmailVerified: Boolean
		isPhoneVerified: Boolean
		age: Int
		gender: String
		bio: String
		profilePic: String
		city: String
		following: [String]
		followers: [String]
	}

	type Query {
		hello: Boolean
	}

	type Mutation {
		# register user
		register(
			name: String
			username: String
			email: String
			password: String
			phoneNo: String
			age: Int
			gender: String
			bio: String
			city: String
		): Boolean
	}
`;

export { typeDefs };
