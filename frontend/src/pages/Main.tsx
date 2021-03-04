import '../css/Main.scss';
import React, { useState } from 'react';
import Map from '../components/Map';
import PlaceSelector from '../components/PlaceSelector';

type Props = {

}

const Main: React.FunctionComponent = (props) => {
	const [places, setPlaces] = useState<any>(null); // state for places
	return (
		<>
			<Map />
			<PlaceSelector places={places} setPlaces={setPlaces} />
		</>
	);
};

export default Main;
