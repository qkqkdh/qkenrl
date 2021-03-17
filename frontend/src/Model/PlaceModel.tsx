import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { PlaceType, childrenObj } from '../Type';

const PlaceState = createContext<Array<PlaceType> | undefined>(undefined);

export const PlaceContextProvider = ({ children }: childrenObj) => {
	const obj : Array<PlaceType> = [{
		name: "업체명",
		type: "업종",
		isMyPlace: true,
		location: "서울시 노원구 섬밭로 17",
		lotNumber: "서울시 노원구 공릉 2동",
		star: 4.5,
		time: "매일 11:30 - 14:00 점심",
		phone: "010-4511-1111",
		review: [{
			star: 1,
			contents: "좋아요"
		}, {
			star: 3,
			contents: "2번 더 와야지"
		}]
	}, {
		name: "업체명2",
		type: "업종",
		isMyPlace: true,
		location: "서울시 노원구 섬밭로 17",
		lotNumber: "서울시 노원구 공릉 2동",
		star: 4,
		time: "매일 11:30 - 14:00 점심",
		phone: "010-4511-1111",
		review: [{
			star: 1,
			contents: "좋아요"
		}]
	}, {
		name: "업체명3",
		type: "업종",
		isMyPlace: true,
		location: "서울시 노원구 섬밭로 17",
		lotNumber: "서울시 노원구 공릉 2동",
		star: 2,
		time: "매일 11:30 - 14:00 점심",
		phone: "010-4511-1111",
		review: [{
			star: 1,
			contents: "좋아요"
		}]
	}];

	const [places, setPlaces] = useState<PlaceType[] | undefined>(obj);

	return (
		<PlaceState.Provider value={places}>
			{children}
		</PlaceState.Provider>
	);
};

export function usePlaceState() {
	const context = useContext(PlaceState);
	return context;
}
