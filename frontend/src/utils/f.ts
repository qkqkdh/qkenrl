import { MapOptions } from "./types";

const { kakao } = window;

export const getMap = (el: HTMLElement | null, options: MapOptions) => {
	if (!kakao) return 0;
	return new kakao.maps.Map(el, options);
};

export const InitializeMap = () => {
	if (!document) return null;
	const el = document.getElementById('map');

	if (!navigator.geolocation) {
		// todo
		return null;
	}
	const map = getMap(el, {
		center: new kakao.maps.LatLng(37.5952687, 127.0507571),
		level: 5,
	});
	return map;
	/* geolocation API
		const success = (position:any) => {
			console.log(position);
		};
		navigator.geolocation.getCurrentPosition(success);
		*/
};
