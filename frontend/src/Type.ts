import React from 'react';

export type PlaceType = {
	id: number,
	name: string,
	type: string,
	isMyPlace: boolean,
	location: string,
	lotNumber: string,
	star: number,
	time: string,
	phone: string,
	review: Array<ReviewType>,
	setMember: string // 정보 등록한 사람
};

export type ReviewType = {
	star: number
	contents: string
}

export type childrenObj = {
	children: React.ReactNode;
}

export type UserType = {
	name: string,
	mail: string
}