import React from 'react';
import '../css/PlacePage.scss';

import { Grid, Paper } from '@material-ui/core';

import { PlaceInfo } from '../components';
import { usePlaceState } from '../Model/PlaceModel';
import { PlaceType } from '../Type';

const PlacePage = () => {
	const places = usePlaceState();

	return (
		<Grid id="place-con">
			<Paper elevation={4} className="search-con">
				{
					places &&
					places.map((place) => <PlaceInfo size="sm" place={place} />)
				}
			</Paper>
			<Grid className="map-con">
				<Grid>map</Grid>
			</Grid>
		</Grid>
	);
};

export default PlacePage;
