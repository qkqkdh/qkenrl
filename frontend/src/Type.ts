import React from 'react';

export type PlaceType = {
	name: string,
	type: string,
	isMyPlace: boolean,
	location: string,
	lotNumber: string,
	star: number,
	time: string,
	phone: string,
	review: Array<ReviewType>
};

export type ReviewType = {
	star: number
	contents: string
}

export type childrenObj = {
	children: React.ReactNode;
}
