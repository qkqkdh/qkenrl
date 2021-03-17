import React from "react";

import { Grid, Paper } from '@material-ui/core';

import { PlaceInfo } from ".";
import { usePlaceState } from '../Model/PlaceModel';
import { PlaceType } from '../Type';

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
	return (
		<Paper elevation={4} className="search-con">
			{
				places &&
				<PlaceInfo size="lg" place={places[0]} />
			}
			{
				places &&
				places.map((place) => <PlaceInfo size="sm" place={place} />)
			}
		</Paper>
	);
};

export default SearchContent;
