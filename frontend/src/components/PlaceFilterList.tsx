import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { LocalCafe, Restaurant, Apartment, School, LocalHospital, LocalFlorist } from "@material-ui/icons";

type Props = {
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
		return <LocalCafe />;
	case "식당":
		return <Restaurant />;
	case "호텔":
		return <Apartment />;
	case "유치원":
		return <School />;
	case "병원":
		return <LocalHospital />;
	case "공원":
		return <LocalFlorist />;
	default:
		return <LocalCafe />;
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

const PlaceFilterList: React.FunctionComponent<Props> = () => {
	const [tag, setTag] = useState<string>("전체");
	useEffect(() => {
		console.log("현재 태그 : ".concat(tag)); // eslint에서 왜 +로 concat 못해유 ㅠㅠㅠ
	}, [tag]);
	return (
		<Grid className="place-filter-container">
			<PlaceFilter category="카페" active={tag === "카페"} setTag={setTag} />
			<PlaceFilter category="식당" active={tag === "식당"} setTag={setTag} />
			<PlaceFilter category="호텔" active={tag === "호텔"} setTag={setTag} />
			<PlaceFilter category="유치원" active={tag === "유치원"} setTag={setTag} />
			<PlaceFilter category="병원" active={tag === "병원"} setTag={setTag} />
			<PlaceFilter category="공원" active={tag === "공원"} setTag={setTag} />
		</Grid>
	);
};

export default PlaceFilterList;
