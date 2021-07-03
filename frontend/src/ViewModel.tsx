import React, { createContext, useContext } from 'react';
import { Place, childrenObj } from './utils/types';
import { usePlaceState, usePlaceDispatch } from './Model/PlaceModel';

const updatePlaceContext = createContext<(place: Place) => void>(() => { });

export const PlaceLogicProvider = ({ children }: childrenObj) => {
	const setPlaces = usePlaceDispatch();
	const places = usePlaceState();

	const updatePlace = (place: Place) => {
		if (!places) {
			return;
		}

		// id에 해당하는 idx 추출
		const idx = places.findIndex((p) => p.info._id === place.info._id);
		// place가 없으면 그냥 return
		if (idx === -1) {
			return;
		}

		// 바꾸기
		const tmpPlace: Array<Place> = places.slice(0);
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
