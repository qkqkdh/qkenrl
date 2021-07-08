import React, { useEffect } from "react";

import { Grid, Paper } from '@material-ui/core';

import { PlaceInfo } from ".";
import { usePlaceState, useSelectedPlaceState } from '../Model/PlaceModel';

interface Props {
	result: any; // TODO : Type Definition
}

/*
	1. result에 따라 분기
		- result === null : 검색어 추천
		- result 정상 : 검색 결과
		- result X : 검색 결과가 없습니다.
*/

/*
	임시로 PlacePage에 있는 코드 일부 발췌
	논의사항 : PlacePage의 Render 수정 건의(PlacePage를 여기 컴포넌트에서 쓰면 좋지 않을까하는 생각)
*/

const SearchContent: React.FunctionComponent<Props> = ({ result }) => {
	const places = usePlaceState();
	const selected = useSelectedPlaceState();

	useEffect(() => {
		const searchCon = document.getElementsByClassName('search-con')[0];
		searchCon.scrollTo(0, 450 * selected);
	}, [selected]);

	return (
		<Paper elevation={4} className="search-con">
			{
				places &&
				places.map((place, index) => (
					<PlaceInfo key={place.info._id} size={index === selected ? "lg" : "sm"} place={place} index={index} />
				))
			}
		</Paper>
	);
};

export default SearchContent;
