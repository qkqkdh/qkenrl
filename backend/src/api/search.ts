import { Response, Request, NextFunction, Router } from "express";
import axios from 'axios';
import { isLoggedIn } from "../utils/middleware";

const router = Router();

const headers = {
	Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`
};

router.get('/', isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
	const { keyword } = req.query;
	if (!keyword) {
		res.status(400).send();
	}

	try {
		const API_URI = encodeURI(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`);
		const { data } = await axios.get(API_URI, { headers });
		res.send(data);
	} catch (err) {
		console.log(err); // todo error 처리
	}
});

router.get('/address', async (req: Request, res: Response, next: NextFunction) => {
	const { keyword } = req.query;
	if (!keyword) {
		res.status(400).send();
	}

	try {
		const API_URI = encodeURI(`https://dapi.kakao.com/v2/local/search/address.json?query=${keyword}`);
		const { data } = await axios.get(API_URI, { headers });
		res.send(data);
	} catch (err) {
		res.status(err.response.status).send();
	}
});

export default router;
