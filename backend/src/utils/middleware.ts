import { Request, Response, NextFunction, ErrorRequestHandler, RequestHandler } from 'express';
import passport from 'passport';

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		if (user) {
			req.user = user;
			next();
		} else {
			res.status(403).send();
		}
	})(req, res, next);
	next();
};
