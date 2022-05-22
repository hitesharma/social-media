import bcrypt from 'bcrypt';
import _ from 'lodash';
import { User } from '../models/register.js';

export default {
	Query: {
		hello: () => {
			return false;
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
			// console.log(args.password, pwd);
			// const match = await bcrypt.compare(args.password, pwd);
			// console.log(match);`
			return true;
		},
	},
};
