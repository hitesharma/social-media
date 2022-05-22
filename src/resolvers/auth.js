import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import config from '../config/config.js';
import { User } from '../models/user.js';

export default {
	Query: {
		login: async (parent, args, context, info) => {
			let user = await User.findOne({ username: args.username });
			if (user === null) {
				throw new Error('user not found');
			}

			let match = await bcrypt.compare(args.password, user.password);
			if (!match) {
				throw new Error('incorrect password');
			}

			let token = jwt.sign({ user: args.username }, config.jwtKey);
			return token;
		},
	},
	Mutation: {
		register: async (parent, args, context, info) => {
			let data = new User(
				_.pick(args, [
					'name',
					'username',
					'email',
					'age',
					'gender',
					'bio',
					'city',
					'phoneNo',
				])
			);
			const saltRounds = 10;
			let pwd = await bcrypt.hash(args.password, saltRounds);
			data.password = pwd;
			await data.save();

			return true;
		},
	},
};
