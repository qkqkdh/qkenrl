import { MapOptions, Place } from "./types";

const { kakao } = window;
const INIT__LAT = '37.5952687';
const INIT__LON = '127.0507571';
export const getMap = (el: HTMLElement | null, options: MapOptions) => {
	if (!kakao) return 0;
	return new kakao.maps.Map(el, options);
};

export const InitializeMap = () => {
	if (!document) return null;
	const el = document.getElementById('map');
	// HTTPS 위에서만 geolocation 동작
	if (!navigator.geolocation) { // 사용불가
		console.log('Geolocation API X');
		return getMap(el, {
			center: new kakao.maps.LatLng(INIT__LAT, INIT__LON), // 수정필요 !!
			level: 5,
		});
	}
	let lat = INIT__LAT;
	let lon = INIT__LON;
	navigator.geolocation.getCurrentPosition(({ coords }) => {
		lat = coords.latitude.toString();
		lon = coords.longitude.toString();
	});
	return getMap(el, {
		center: new kakao.maps.LatLng(lat, lon),
		level: 5,
	});
};

export const createMarker = (place: Place) => {
	const markerPosition = new kakao.maps.LatLng(place.geo.coordinates[1], place.geo.coordinates[0]);
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		clickable: true,
	});

	return {
		marker,
		place,
	};
};
