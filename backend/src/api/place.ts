import { Response, Request, NextFunction, Router } from "express";
import PlaceModel from '../model/Place';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => { // todo : authentication
	const { writer, name, category, location, x, y, phone, timeInfo, desc } = req.body;
	// todo : data validation
	try {
		const result = await PlaceModel.create({
			name,
			category,
			location,
			x,
			y,
			phone,
			timeInfo: [],
		});

		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).send();
	}
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const { x, y, keyword } = req.query;
	if (!x && !y && !keyword) {
		res.status(400).send();
	}
	if (x && y) { // case 1 with location
		const places = await PlaceModel.find(); // TODO : x,y 좌표 기준으로 주변값들 가져오기
		res.status(200).json(places);
	} else if (keyword) { // case 2 with keyword
		const places = await PlaceModel.find({ name: /keyword/ });
		res.status(200).json(places);
	}
});

router.get('/my', (req: Request, res: Response, next: NextFunction) => {
	res.send('TODO: AUTHENTICATION');
});

export default router;
