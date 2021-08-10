import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../../model/User';

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: "process.env.JWT_SECRET",
};

const JWTStrategy = (passport: passport.PassportStatic) => {
	passport.use(new Strategy(jwtOptions, async (payload, done) => {
		try {
			const user = await User.findOne({ username: payload.username });
			if (!user) {
				done(null, false);
			} else {
				done(null, user);
			}
		} catch (err) {
			done(err);
		}
	}));
};

export default JWTStrategy;
