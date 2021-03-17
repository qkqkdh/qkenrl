import React from 'react';
import { Grid, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import { Place } from '../utils/types';

type Props = {
	place: Place
}
const SmallPlaceInfo : React.FC<Props> = ({ place }) => {
	const obj = {
		name: "업체명",
		type: "업종",
		isMyPlace: true,
		location: "서울시 노원구 섬밭로 17",
		lotNumber: "서울시 노원구 공릉 2동",
		star: 4.5,
		time: "매일 11:30 - 14:00 점심",
		phone: "010-4511-1111"
	};

	return (
		<Grid className="place-component">
			<Grid className="place-header">
				<Grid>
					<h4>{place.name}</h4>
					<h6>{place.category}</h6>
				</Grid>
				<FavoriteIcon />
			</Grid>
			<Grid className="place-info">
				<Grid>
					<p>
						<StarIcon />
						{/* todo */}
						5
						/5
					</p>
					<Button variant="outlined">
						<CreateIcon />
						리뷰 작성
					</Button>
				</Grid>
				<Grid className="location">
					<p>
						<strong>주소</strong>
						{place.roadLocation}
					</p>
					<p className="lot-number">
						<strong>지번</strong>
						{place.location}
					</p>
				</Grid>
				<Grid>
					<p>
						<strong>영업시간</strong>
						{/* TODO */}
					</p>
					{place.phone &&
					<p>
						<strong>전화</strong>
						{obj.phone}
					</p>}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SmallPlaceInfo;
