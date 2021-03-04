declare global {
	interface Window {
		kakao: {
			maps: {
				Map: any;
				LatLng: any;
				event: {
					addListener: any;
					removeListener: any;
				}
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