import { Response, Request, NextFunction, Router } from "express";
import PlaceModel from '../model/Place';

const router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => { // todo : authentication
	res.send('POST /place');
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const { x, y, keyword } = req.query;
	if (x && y) { // case 1 with location
		const places = await PlaceModel.find(); // TODO : x,y 좌표 기준으로 주변값들 가져오기
		res.status(200).json('TODO: x,y좌표 기준으로 주변값들 가져오기');
	} else if (keyword) { // case 2 with keyword
		const places = await PlaceModel.find({ name: /keyword/ });
		res.status(200).json(places);
	}
});

router.get('/my', (req: Request, res: Response, next: NextFunction) => { 
	res.send('TODO: AUTHENTICATION');
});

export default router;
