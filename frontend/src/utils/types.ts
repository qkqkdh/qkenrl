declare global {
	interface Window {
		kakao: {
			maps: {
				Map: any;
				LatLng: any;
				event: {
					addListener: any;
					removeListener: any;
				};
				Marker: any;
			}
		}
	}
}

type Map = {
	getMap: () => {};
}

export type MapOptions = {
	center: any;
	level: number;
}

export type Center = {
	x: string;
	y: string;
}

export type Place = {
	writer: string; // todo
	name: string;
	category: string;
	location: string;
	roadLocation: string;
	geo: {
		type: string,
		coordinates: Number[],
	};
	phone: string;
	timeInfo: any[];
	reviews: string;
}

export type Marker = {
	marker: {
		setMap: any;
	},
	place: Place,
}
