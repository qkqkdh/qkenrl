import { Response, Request, NextFunction, Router } from "express";
import axios from 'axios';

const router = Router();

type SearchResult = {
	address: string;
	category: string;
	phone: string;
	placeName: string;
	placeUrl: string;
	x: string;
	y: string;
	[key: string]: string;
}

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const { keyword } = req.query;
	if (!keyword) {
		res.status(400).send();
	}

	try {
		const API_URI = encodeURI(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`);
		const { data } = await axios.get(API_URI, { headers: {
			Authorization: `KakaoAK bcc31d762710145a6dce5259469d537f`,
		} });
		res.send(data);
	} catch (err) {
		console.log(err); // todo error 처리
	}
});

export default router;
