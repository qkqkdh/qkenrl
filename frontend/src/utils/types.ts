import React from "react";

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

export type Review = {
	star: number;
	desc: string;
}

export type PlaceInfo = {
	_id: string;
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
	reviews: Review[];
	isMyPlace?: boolean;
}

export type Place = {
	marker: {
		setMap: any;
	};
	info: PlaceInfo;
}

export type childrenObj = {
	children: React.ReactNode;
}

export type User = {
	username: string;
	email: string;
}
