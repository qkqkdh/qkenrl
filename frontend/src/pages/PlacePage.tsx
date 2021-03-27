import '../css/PlaceInfo.scss';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map';

import { Center, Marker, Place } from '../utils/types';
import { createMarker, InitializeMap } from '../utils/f';
import { Layout, SearchBar, SearchContent, SideBar } from '../components';

type Props = {

}

const { kakao } = window;
const Main: React.FunctionComponent = (props) => {
	const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
	const [map, setMap] = useState<any>(null); // state for map
	const [center, setCenter] = useState<Center | null>(null); // state for center loc
	const [markers, setMarkers] = useState<Marker[]>([]); // state for search result
	const [selected, setSelected] = useState<number>(-1);
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
			console.log(Ma, La);
			cancelToken.current = axios.CancelToken.source(); // update
			setCenter({
				x: Ma,
				y: La,
			});
		};
		const handleMapClick = () => {
			setSelected(-1);
		};
		kakao.maps.event.addListener(map, 'center_changed', handleCenterChange);
		kakao.maps.event.addListener(map, 'click', handleMapClick);
		handleCenterChange();
		// eslint-disable-next-line consistent-return
		return () => {
			kakao.maps.event.removeListener(map, 'center_changed', handleCenterChange);
			kakao.maps.event.removeListener(map, 'click', handleMapClick);
		};
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
		// TODO: 기존 마커들 초기화
		if (!map || !markers.length) return;
		console.log(markers);
		markers.forEach((marker, idx) => {
			marker.marker.setMap(map);
			kakao.maps.event.addListener(marker.marker, 'click', () => {
				setSelected(idx);
			});
		});
	}, [map, markers]);

	const handleSearchResult = (places: Place[]) => {
		setMarkers(places.map((place) => createMarker(place)));
	};

	const handleSideBarOpen = () => {
		setSideBarOpen(true);
	};

	const handleSideBarClose = () => {
		setSideBarOpen(false);
	};

	return (
		<>
			<Layout open={sideBarOpen} handleSideBarClose={handleSideBarClose}>
				<Map />
				<div className="place-side-bar">
					<SearchBar
						handleSearchResult={handleSearchResult}
						handleSideBarOpen={handleSideBarOpen}
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
