import '../css/Main.scss';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map';
import PlaceSelector from '../components/PlaceSelector';
import { Center, Marker, Place } from '../utils/types';
import { createMarker, InitializeMap } from '../utils/f';
import { Layout, SearchBar, SearchContent } from '../components';

type Props = {

}

const { kakao } = window;
const Main: React.FunctionComponent = (props) => {
	const [map, setMap] = useState<any>(null); // state for map
	const [center, setCenter] = useState<Center | null>(null); // state for center loc
	const [markers, setMarkers] = useState<Marker[]>([]); // state for search result
	const cancelToken = useRef(axios.CancelToken.source());

	useEffect(() => {
		if (!document || !kakao) return;
		setMap(InitializeMap());
	}, []);
	useEffect(() => { // ADD EVENT HANDLER
		if (!map) return;
		const handleCenterChange = () => {
			const { Ma, La } = map.getCenter();
			cancelToken.current.cancel('이전 요청 취소');
			cancelToken.current = axios.CancelToken.source(); // update
			setCenter({
				x: Ma,
				y: La,
			});
		};

		kakao.maps.event.addListener(map, 'center_changed', handleCenterChange);
		// eslint-disable-next-line consistent-return
		return () => kakao.maps.event.removeListener(map, 'center_changed', handleCenterChange);
	}, [map]);
	useEffect(() => {
		/*
			1. center 변경시  handleCenterChange 호출
			2. API 호출해서 주변 place들 가져옴
			3. Map에 marker 셋팅
		*/
		if (!center) return;
		axios.get(`http://localhost:3001/place?x=${center.x}&y=${center.y}`, {
			cancelToken: cancelToken.current.token
		})
			.then((result) => {
				const { data } = result;
				const _ = data.map((place: Place) => createMarker(place));
				setMarkers(_);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log('요청 취소');
				} else {
					console.log(err);
				}
			});
	}, [center]);

	useEffect(() => {
		if (!map || !markers.length) return;
		console.log(markers);
		markers.forEach((marker) => {
			marker.setMap(map);
		});// marker state 위치 고민해
	}, [map, markers]);

	const handleSearchResult = (places: Place[]) => {
		setMarkers(places.map((place) => createMarker(place)));
	};

	return (
		<>
			<Layout>
				<Map />
				<div className="side-bar">
					<SearchBar
						handleSearchResult={handleSearchResult}
					/>
					<SearchContent
						result=" "
					/>
				</div>
			</Layout>
		</>
	);
};

export default Main;
