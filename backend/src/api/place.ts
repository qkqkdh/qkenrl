/* eslint-disable camelcase */
import { Response, Request, NextFunction, Router } from "express";
import PlaceModel from '../model/Place';
import User from "../model/User";
import { isLoggedIn } from '../utils/middleware';

const router = Router();

router.post('/', isLoggedIn, async (req: Request, res: Response, next: NextFunction) => { // todo : authentication
	const { writer, name, category, location, x, y, phone, timeInfo, desc, place_url, roadLocation } = req.body;
	// todo : data validation
	try {
		const result = await PlaceModel.create({
			writer,
			name,
			category,
			location,
			roadLocation,
			geo: {
				type: "Point",
				coordinates: [x, y],
			},
			phone,
			desc,
			timeInfo
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
		const places = await PlaceModel.find({
			geo: {
				$geoWithin: {
					$centerSphere: [[y, x], 5 / 6378.1]
				}
			}
		});
		res.status(200).json(places);
	} else if (keyword) { // case 2 with keyword
		// regex 적용안됨 -> keyword type
		keyword as string;
		const places = await PlaceModel.find({ name: { $regex: new RegExp(keyword as string), $options: 'i' } });
		res.status(200).json(places);
	}
});

router.get('/category', async (req: Request, res: Response, next: NextFunction) => {
	// x, y 좌표 기준 현재 카테고리 별 검색
	const { x, y, category } = req.query;
	if (!x || !y || !category) {
		res.status(400).send();
	}

	let reg = `\\${category}\+`;
	if(category === "전체"){
		reg = ".";
	}else if(category === "식당"){
		reg = `\\${"음식점"}\+`;
	}

	const places = await PlaceModel.find({
		geo: {
			$geoWithin: {
				$centerSphere: [[y, x], 5 / 6378.1] // TODO : 5가 아니라 현재 보고 있는 zoom 반영
			}
		},
		category : { $regex: reg , $options : 'i'}
	});
	
	res.status(200).json(places);
});

router.post('/my', isLoggedIn, async (req: Request, res: Response, next: NextFunction) => { // 내 장소 추가
	const { placeId } = req.body;
	try {
		const user = User.findOne({ username: req.user && req.user.username });
		const place = await PlaceModel.findOne({_id: placeId});
		if (!place) {
			res.status(400).send();
		} else {
			user.places.push(place.id);
		}
	} catch (err) {
		console.log("TODO ERROR RESPONSE");
	}
});

router.get('/my', isLoggedIn, async (req: Request, res: Response, next: NextFunction) => { // 내 장소 가져오기
	try {
		//TODO 
	} catch (err) {
		console.log("TODO ERROR RESPONSE");
	}
});

router.post('/review', isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
	const { placeId, star, desc } = req.body;
	// todo : Data validation
	try {
		const place = await PlaceModel.findOne({ _id: placeId });
		if (!place) {
			res.status(404).send();
		}
		place.reviews.push({
		//	writer: req.user,
			star,
			desc,
		});
		await place.save();
		res.status(201).send(place.reviews[place.reviews.length - 1]);
	} catch (err) {
		res.status(500).send();
	}
});

export default router;
