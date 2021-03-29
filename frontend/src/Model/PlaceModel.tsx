import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { PlaceType, childrenObj } from '../Type';

const PlaceState = createContext<Array<PlaceType> | undefined>(undefined); // 검색 결과
const PlaceDispatch = createContext<Dispatch<Array<PlaceType>>>(() => { });
const SelectedPlaceState = createContext<number>(-1);
const SelectedPlaceDispatch = createContext<Dispatch<number>>(() => { });

export const PlaceContextProvider = ({ children }: childrenObj) => {
	const obj: Array<PlaceType> = [{
		id: 1,
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
		}, {
			star: 4,
			contents: "여기 좋아요"
		}, {
			star: 1,
			contents: "눈치 엄청 주네요"
		}, {
			star: 2,
			contents: "흠.."
		}],
		setMember: "버금이"
	}, {
		id: 2,
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
		}],
		setMember: "운영진"
	}, {
		id: 3,
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
		}],
		setMember: "운영진"
	}];
	const [places, setPlaces] = useState<PlaceType[] | undefined>(obj);
	const [selected, setSelected] = useState<number>(1);

	return (
		<PlaceState.Provider value={places}>
			<PlaceDispatch.Provider value={setPlaces}>
				<SelectedPlaceState.Provider value={selected}>
					<SelectedPlaceDispatch.Provider value={setSelected}>
						{children}
					</SelectedPlaceDispatch.Provider>
				</SelectedPlaceState.Provider>
			</PlaceDispatch.Provider>
		</PlaceState.Provider>
	);
};

export function usePlaceState() {
	const context = useContext(PlaceState);
	return context;
}

export function usePlaceDispatch() {
	const context = useContext(PlaceDispatch);
	return context;
}

export function useSelectedPlaceState() {
	const context = useContext(SelectedPlaceState);
	return context;
}

export function useSelectedPlaceDispatch() {
	const context = useContext(SelectedPlaceDispatch);
	return context;
}
