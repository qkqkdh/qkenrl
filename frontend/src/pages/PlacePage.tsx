import '../css/PlaceInfo.scss';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Map from '../components/Map';

import { Center, Place, PlaceInfo } from '../utils/types';
import { createMarker, InitializeMap, debounce } from '../utils/f';
import { Layout, PlaceFilterList, SearchBar, SearchContent, SideBar } from '../components';
import { usePlaceDispatch, usePlaceState, useSelectedPlaceDispatch, useSelectedPlaceState } from '../Model/PlaceModel';

type Props = {

}

const { kakao } = window;
const Main: React.FunctionComponent = (props) => {
	const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
	const [map, setMap] = useState<any>(null); // state for map
	const [center, setCenter] = useState<Center | null>(null); // state for center loc
	const places = usePlaceState();
	const setPlaces = usePlaceDispatch();
	const selected = useSelectedPlaceState();
	const setSelected = useSelectedPlaceDispatch();
	const cancelToken = useRef(axios.CancelToken.source());

	useEffect(() => {
		if (!document || !kakao) return;
		setMap(InitializeMap());
	}, []);

	useEffect(() => {
		// 선택된 마커가 바뀌면 map을 해당 위치로 변환
		if (!map || !places || !places[selected] || !places[selected].info) return;
		console.log(places[selected]);
		map.setCenter(new kakao.maps.LatLng(places[selected].info.geo.coordinates[1], places[selected].info.geo.coordinates[0]));
	}, [selected]);

	useEffect(() => { // ADD EVENT HANDLER
		if (!map) return;
		const handleCenterChange = () => {
			const { Ma, La } = map.getCenter();
			console.log(Ma, La);
			cancelToken.current.cancel('이전 요청 취소');
			cancelToken.current = axios.CancelToken.source(); // update
			setCenter({
				x: Ma,
				y: La,
			});
		};
		// 화면 움직일 시 center 값 초기화, 이전 API 호출들 취소 // TODO lodash
		const handleMapClick = () => {
			setSelected(-1);
		};
		kakao.maps.event.addListener(map, 'center_changed', debounce(handleCenterChange, 500)); // center가 바뀐 후 0.5초 내에 또 바뀌면 이전 요청 취소
		kakao.maps.event.addListener(map, 'click', handleMapClick);
		handleCenterChange();
		// eslint-disable-next-line consistent-return
		return () => {
			kakao.maps.event.removeListener(map, 'center_changed', handleCenterChange);
			kakao.maps.event.removeListener(map, 'click', handleMapClick);
		};
	}, [map]);

	/** 희은 : map을 움직였을 때 주변 place 받아오기 없앰(회의 결과) */
	// useEffect(() => {
	// 	/*
	// 		1. center 변경시  handleCenterChange 호출
	// 		2. API 호출해서 주변 place들 가져옴
	// 		3. Map에 marker 셋팅
	// 	*/
	// 	if (!center) return;
	// 	axios.get(`http://localhost:3001/place?x=${center.x}&y=${center.y}`, {
	// 		cancelToken: cancelToken.current.token
	// 	})
	// 		.then((result) => {
	// 			const { data } = result;
	// 			const _ = data.map((place: PlaceInfo) => createMarker(place));
	// 			console.log(_);
	// 			setPlaces(_);
	// 		})
	// 		.catch((err) => {
	// 			if (axios.isCancel(err)) {
	// 				console.log('요청 취소');
	// 			} else {
	// 				console.log(err);
	// 			}
	// 		});
	// }, [center]);

	useEffect(() => {
		// TODO: 기존 마커들 초기화
		if (!map || !places.length) return;
		console.log(places);
		places.forEach((place, idx) => {
			place.marker.setMap(map);
			kakao.maps.event.addListener(place.marker, 'click', () => {
				setSelected(idx);
			});
		});
	}, [map, places]);

	const handleSearchResult = (places: PlaceInfo[]) => {
		setPlaces(places.map((place) => createMarker(place)));
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
				{
					center &&
					<PlaceFilterList center={center} />
				}
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
