import { gql } from 'apollo-server';

export default gql`
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
		login(username: String!, password: String!): String
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
