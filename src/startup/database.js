import mongoose from 'mongoose';
import config from '../config/config.js';

export default () => {
	mongoose
		.connect(config.mongoose.url, config.mongoose.options)
		.then(() => console.log('Connected to MongoDB'))
		.catch((error) => console.error(`Connection Failed: ${error}`));
};
