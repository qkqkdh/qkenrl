import React, { useEffect, useState } from "react";
import { InitializeMap } from "../utils/f";

// Map 코드 작성
type Props = {

}
const { kakao } = window;
const Map: React.FunctionComponent = (props) => {
	const [map, setMap] = useState<any>(null);
	const [center, setCenter] = useState<any>(null);

	useEffect(() => {
		if (!document || !kakao) return;
		setMap(InitializeMap());
	}, []);

	useEffect(() => {
	}, [center]);

	useEffect(() => {
		if (!map) return;
		kakao.maps.event.addListener(map, 'center_changed', () => {
			console.log(map.getCenter());
		});
	}, [map]);
	return (
		<div id="map" />
	);
};

export default Map;
