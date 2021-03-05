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
	x: string;
	y: string;
	phone: string;
	timeInfo: any[];
}

export type Marker = {
	setMap: (map?: any) => void;
}
