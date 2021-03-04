import { Response, Request, NextFunction, Router } from "express";
import UserModel from "../model/User";
import SecretCodeModel from "../model/Secretcode";

const router = Router();

router.post("/login"); // IF Status is pending then need to deny the login

router.get("/logout");

router.post(
	"/signup",
	async (req: Request, res: Response, next: NextFunction) => {
		const { id, password, email } = req.body;
		try {
			const user = await UserModel.findOne({ username: id });
			if (user) {
				res.status(400).send();
			} else {
				const newUser = await UserModel.create({
					username: id,
					password,
					email
				});
				const code = await SecretCodeModel.create({
					userid: newUser._id,
					code: "test"
				});
				res.status(200).send(JSON.stringify(newUser));
				// URL : ??/api/auth/verification/${newUser._id}/${code.code}
				// TODO : make code and send email to user for authentication
				// TODO : need to check email limitation
			}
		} catch (err) {
			console.log(err);
			res.status(500).send();
		}
	}
);

router.get("/test", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await UserModel.find();
		res.status(200).send(JSON.stringify(users));
	} catch (err) {
		res.status(500).send();
	}
});

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
export default router;
