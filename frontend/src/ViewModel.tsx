import React, { createContext, useContext } from 'react';
import { PlaceType, childrenObj } from './Type';
import { usePlaceState, usePlaceDispatch } from './Model/PlaceModel';

const updatePlaceContext = createContext<(place: PlaceType) => void>(() => { });

export const PlaceLogicProvider = ({ children }: childrenObj) => {
	const setPlaces = usePlaceDispatch();
	const places = usePlaceState();

	const updatePlace = (place: PlaceType) => {
		if (!places) {
			return;
		}

		// id에 해당하는 idx 추출
		let idx = -1;
		places.forEach((p, index) => {
			if (p.id !== place.id) {
				return;
			}
			idx = index;
		});

		// place가 없으면 그냥 return
		if (idx === -1) {
			return;
		}

		// 바꾸기
		const tmpPlace: Array<PlaceType> = places.slice(0);
		tmpPlace[idx] = place;
		setPlaces(tmpPlace);
	};

	return (
		<updatePlaceContext.Provider value={updatePlace}>
			{ children}
		</updatePlaceContext.Provider>
	);
};

export function useUpdatePlace() {
	const context = useContext(updatePlaceContext);
	return context;
}
