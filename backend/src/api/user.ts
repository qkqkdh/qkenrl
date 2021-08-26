import { Response, Request, NextFunction, Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import { sha256 } from 'js-sha256';
import UserModel, { UserDocument } from "../model/User";
import SecretCodeModel from "../model/Secretcode";
import { isLoggedIn } from "../utils/middleware";
import { transporter } from "../utils/mailer";
import { FilterQuery } from "mongoose";

require('dotenv').config();

const router = Router();

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('local', { session: false }, (err, user, info) => {
		if (err || !user || user.status === 'pending') {
			let message = '';
			if(user.status === 'pending') {
				message = "EmailVerificationRequired";
			}
			res.status(401).send(message);
		} else {
			req.logIn(user, { session: false }, (err) => {
				if (err) {
					res.status(500).send();
				} else {
					const { username } = user;
					const token = jwt.sign({
						username,
					}, process.env.JWT_SECRET as string, { expiresIn: 1000 * 60 * 30 });
					res.status(200).json({ token });
				}
			});
		}
	})(req, res, next);
});
router.get("/logout", isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
	req.logout();
	res.status(200).send();
});

router.post(
	"/signup",
	async (req: Request, res: Response, next: NextFunction) => {
		const { id, password, email } = req.body;
		try {
			const user = await UserModel.findOne({
				$or: [{ username: id }, { email }]
			});
			if (user) {
				if (user.username === id) {
					res.status(400).send("AlreadyExistsId");
				} else if (user.email === email) {
					res.status(400).send("AlreadyExistsEmail");
				}
			} else {
				const newUser = await UserModel.create({
					username: id,
					password,
					email
				});
				const code = await SecretCodeModel.create({
					userid: newUser._id,
					code: sha256(newUser.username)
				});
				const mail = { // FIXME from, html template
					from: process.env.MAIL_USER,
					to: email,
					subject: `[BDCS] 회원가입 인증메일입니다.`,
					html: `<p><a href="${process.env.DOMAIN || 'http://localhost:3001'}/user/verification/${newUser._id}/${code.code}">링크</a>를 클릭해서 인증을 완료해주세요.</p>`
				};
				transporter.sendMail(mail)
					.then(() => {
						// FIXME

					})

					.catch((err: any) => {
						// FIXME
						console.error(err);
					});
				res.status(200).send(JSON.stringify(newUser));
			}
		} catch (err) {
			console.log(err);
			res.status(500).send();
		}
	}
);

router.get(
	"/verification/:userid/:secretCode",
	async (req: Request, res: Response, next: NextFunction) => {
		const { userid, secretCode } = req.params;
		const user = await UserModel.findOne({ _id: userid });
		console.log(user);
		if (user && user.status === "pending") {
			const code = await SecretCodeModel.findOne({ userid, code: secretCode });
			if (code) {
				// 통과
				user.status = "active";
				await user.save();
				await SecretCodeModel.deleteOne({ _id: code._id });
				res.redirect("/");
			} else {
				res.send("잘못된 경로입니다.");
			}
		} else {
			res.send("이미 인증 됐거나 잘못된 주소입니다.");
		}
	}
);

router.get('/verification', async (req: Request, res: Response, next: NextFunction) => {
	const { id, email } = req.query;
	if (!id && !email) {
		res.status(400).send();
	}
	const _id = id as string;
	const _email = email as string;
	try {
		const opts: FilterQuery<UserDocument> = {};
		if(_id) {
			opts['username'] = _id;
		}
		if(_email) {
			opts['email'] = _email;
		}
		const user = await UserModel.findOne(opts);
		if(user) {
			res.status(400).send();
		} else {
			res.status(200).send();
		}
	} catch (err) {
		console.error(err);
		res.status(500).send();
	}
});
export default router;
