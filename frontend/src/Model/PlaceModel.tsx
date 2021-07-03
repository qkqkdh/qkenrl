import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { childrenObj, Place } from '../utils/types';

const PlaceState = createContext<Place[]>([]); // 검색 결과
const PlaceDispatch = createContext<Dispatch<Place[]>>(() => { });
const SelectedPlaceState = createContext<number>(-1);
const SelectedPlaceDispatch = createContext<Dispatch<number>>(() => { });

export const PlaceContextProvider = ({ children }: childrenObj) => {
	const [places, setPlaces] = useState<Place[]>([]);
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
