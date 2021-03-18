// JWT Strategy
import passport from 'passport';
import User, { IUser } from '../../model/User';
import localStrategy from './local';
import jwtStrategy from './jwt';

declare global {
	namespace Express {
		interface User extends IUser {
			id: any;
		}
	}
}

const config = (passport: passport.PassportStatic) => {
	passport.serializeUser((user, done) => {
		done(null, user.username);
	});

	passport.deserializeUser(async (id: string, done) => {
		try {
			const user = await User.findOne({ where: { username: id } });
			done(null, user);
		} catch (err) {
			console.log(err);
			done(err);
		}
	});
	jwtStrategy(passport);
	localStrategy(passport);
};

export default config;
