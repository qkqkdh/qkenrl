/* eslint-disable camelcase */
import { Response, Request, NextFunction, Router } from "express";
import PlaceModel from '../model/Place';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => { // todo : authentication
	const { writer, name, category, location, x, y, phone, timeInfo, desc, place_url } = req.body;
	// todo : data validation
	try {
		console.log(place_url); // 크롤링?
		const result = await PlaceModel.create({
			writer,
			name,
			category,
			location,
			x,
			y,
			phone,
			desc,
			timeInfo: [],
		});

		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).send();
	}
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	// TODO : x,y 좌표 기준으로 주변값들 가져오기
	//
	const { x, y, keyword } = req.query;
	if (!x && !y && !keyword) {
		res.status(400).send();
	}
	if (x && y) { // case 1 with location
		const places = await PlaceModel.find();
		res.status(200).json(places);
	} else if (keyword) { // case 2 with keyword
		// regex 적용안됨?
		const places = await PlaceModel.find({ name: { $regex: /keyword/ } });
		console.log(places);
		res.status(200).json(places);
	}
});

router.get('/my', (req: Request, res: Response, next: NextFunction) => {
	res.send('TODO: AUTHENTICATION');
});

export default router;
