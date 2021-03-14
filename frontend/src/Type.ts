import React from 'react';

export type PlaceType = {
	name: string,
	type: string,
	isMyPlace: boolean,
	location: string,
	lotNumber: string,
	star: number,
	time: string,
	phone: string
};

export type childrenObj = {
	children: React.ReactNode;
}
