import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: String,
	username: { type: String, unique: true },
	email: String,
	password: String,
	phoneNo: String,
	isEmailVerified: Boolean,
	isPhoneVerified: Boolean,
	age: Number,
	gender: String,
	bio: String,
	profilePic: { type: String, default: '' },
	city: String,
	following: [String],
	followers: [String],
});

const User = mongoose.model('user', userSchema, 'user');

export { User };
