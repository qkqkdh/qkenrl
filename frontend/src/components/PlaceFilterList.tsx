import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { LocalCafe, Restaurant, Apartment, School, LocalHospital, LocalFlorist } from "@material-ui/icons";
import axios from 'axios';
import { Center, PlaceInfo } from '../utils/types';
import { clearMarker, createMarker } from '../utils/f';
import { usePlaceDispatch, usePlaceState } from '../Model/PlaceModel';
import { API_URL } from "../utils/CommonVariables";

type Props = {
	center : Center
}

type FilterProps = {
	category: string;
	active?: boolean;
	setTag?: any;
}

const FilterIcon: React.FunctionComponent<FilterProps> = ({ category }) => {
	/* TODO : Material-UI에서 제공하는 Icon이 프로토타입이랑 맞는 게 일부 없어서 디자인 따로 받아야 함 */
	/* eslint에서 switch문 탭간격 이상하게 잡아요.. */
	switch (category) {
	case "카페":
		return <img src="/img/icon_cafe.png" alt="icon_cafe" />;
	case "식당":
		return <img src="/img/icon_restaurant.png" alt="icon_restaurant" />;
	case "호텔":
		return <img src="/img/icon_hotel.png" alt="icon_hotel" />;
	case "유치원":
		return <img src="/img/icon_kindergarden.png" alt="icon_kindergarden" />;
	case "병원":
		return <img src="/img/icon_hospital.png" alt="icon_hospital" />;
	case "공원":
		return <img src="/img/icon_walk.png" alt="icon_walk" />;
	default:
		return <img src="/img/icon_cafe.png" alt="icon_cafe" />;
	}
};

const PlaceFilter: React.FunctionComponent<FilterProps> = ({ category, active, setTag }) => {
	const buttonClick = () => {
		if (active) {
			setTag("전체");
		} else {
			setTag(category);
		}
	};
	return (
		<Grid className="place-filter">
			<Button variant="contained" className={"place-filter".concat((active ? " place-filter-selected" : ""))} onClick={buttonClick}>
				<FilterIcon category={category} />
				{category}
			</Button>
		</Grid>
	);
};

const PlaceFilterList: React.FunctionComponent<Props> = ({ center }) => {
	const places = usePlaceState();
	const setPlaces = usePlaceDispatch();

	const [tag, setTag] = useState<string>("전체");
	const fetchPlace = async () => {
		const result = await axios.get(`${API_URL}/place/category?x=${center.x}&y=${center.y}&category=${tag}`);
		const { data } = result;
		const _ = data.map((place: PlaceInfo) => createMarker(place));
		setPlaces(_);
	};
	useEffect(() => {
		console.log(`현재 태그 : ${tag}`);
		clearMarker(places);
		fetchPlace();
	}, [tag]);
	return (
		<Grid className="place-filter-container">
			<PlaceFilter category="카페" active={tag === "카페"} setTag={setTag} />
			<PlaceFilter category="애견카페" active={tag === "애견카페"} setTag={setTag} />
			<PlaceFilter category="식당" active={tag === "식당"} setTag={setTag} />
			<PlaceFilter category="호텔" active={tag === "호텔"} setTag={setTag} />
			<PlaceFilter category="유치원" active={tag === "유치원"} setTag={setTag} />
			<PlaceFilter category="병원" active={tag === "병원"} setTag={setTag} />
			<PlaceFilter category="공원" active={tag === "공원"} setTag={setTag} />
		</Grid>
	);
};

export default PlaceFilterList;
