import passport from 'passport';
import { Strategy } from 'passport-local';
import { ExtractJwt, Strategy as jwtStrategy } from 'passport-jwt';
import User from '../../model/User';

const localStrategy = (passport: passport.PassportStatic) => {
	passport.use(new Strategy({
		usernameField: 'username',
		passwordField: 'password',
	}, async (username, password, done) => {
		try {
			const user = await User.findOne({ username });
			if (user) {
				if (user.password === password) {
					done(null, user);
				} else {
					done(null, false);
				}
			} else {
				done(null, false);
			}
		} catch (err) {
			console.log(err);
			done(err);
		}
	}));
};

export default localStrategy;
