import axios from 'axios';
import cheerio from 'cheerio';
import fs, { write } from 'fs';
import Place from '../../model/Place';
import PlaceModel from '../../model/Place';


type ResultType = {
	"title" : string,
	"category" : string,
	"info" : string[],//infoListType,
	"alert" : string[]
}
// type infoListType = {
// 	"phone_num" : string,
// 	"address" : string,
// 	"time" : string,
// 	"holiday" : string,
// 	"parking" : string,
// 	"allowed_place" : string,
// 	"allowed_pet" : string,
// 	"page" : string
// }

const infoKey = ["phone_num", "address", "time", "holiday", "parking", "allowed_place", "allowed_pet", "page"];

const writeResult : ResultType[] = [];

const crawlingModule = async (idx : number) => {
	await axios.get(`https://www.pet79.com/life/petlife_view.asp?company_idx=${idx}`)
	.then(html => {
		return cheerio.load(html.data);
	})
	.then(obj => {
		const title = obj("div.petlife_name").text();
		const category = obj("em.font_wn").text();
		const infoList_html = obj("dl.petlife_info").children("dd");
		let infoList : string[] = [];
		infoList_html.each((idx : number, info) => {
			infoList.push(obj(info).text());
		});
		const alert_html = obj("div.p_v_dtail_txt").children("p");
		let alertList : string[] = [];
		alert_html.each((idx : number, info) => {
			alertList.push(obj(info).text());
		});

		putInfo({
			"title" : title,
			"category" : category,
			"info" : infoList,
			"alert" : [...alertList]
		});
	})
	.catch((e) => {
		console.log("error");
		console.log(e);
	})
};

const headers = {
	Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`
};

const getLocation = async (title : string) => { // 실제 주소 넣기
	try{
		const API_URI = encodeURI(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${title}`);
		const { data } = await axios.get(API_URI, { headers });
		if(!data.documents || !data.documents[0])
			return;
		const x : number = data.documents[0].x;
		const y : number = data.documents[0].y;
		console.log(x,y);
		return [x,y];
	}catch(err){
		console.log(err);
		return;
	}
}

const putInfo = async (result : ResultType) => { // DB에 넣기
	getLocation(result.title)
	.then(async point => {
		if(!point){
			point = [0,0];
		}
		try {
			const newPlace = await new Place({
				name : result.title,
				category : result.category,
				location : result.info[1],
				roadLocation : result.info[1],
				geo: {
					type: "Point",
					coordinates: [point[0], point[1]],
				},
				phone : result.info[0],
				desc : result.alert.join('\n'),
				timeInfo: result.info[2]
			});
			newPlace.save();
		} catch (err) {
			console.log(err);
		}
	})
	
}

const getInfo = async () => {
	for(let i=1; i<500; i++){ // 1000까지 있음
		await crawlingModule(i);
	}
}

export default getInfo;