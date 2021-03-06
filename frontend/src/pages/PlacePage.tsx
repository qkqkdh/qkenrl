import React from 'react';
import '../css/PlacePage.scss';

import { Grid, Paper } from '@material-ui/core';

import { SmallPlaceInfo, LargePlaceInfo } from '../components';

const PlacePage = () => {
	const a = 1;
	return (
		<Grid id="place-con">
			<Paper elevation={4} className="search-con">
				<SmallPlaceInfo />
				<LargePlaceInfo />
			</Paper>
			<Grid className="map-con">
				<Grid>map</Grid>
			</Grid>
		</Grid>
	);
};

export default PlacePage;
