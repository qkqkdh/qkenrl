import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { childrenObj, Place } from '../utils/types';

const PlaceState = createContext<Place[]>([]); // 검색 결과
const PlaceDispatch = createContext<Dispatch<Place[]>>(() => { });
const SelectedPlaceState = createContext<number>(-1);
const SelectedPlaceDispatch = createContext<Dispatch<number>>(() => { });
const MyPlaceState = createContext<string[]>([]);
const MyPlaceDispatch = createContext<Dispatch<string[]>>(() => {});

export const PlaceContextProvider = ({ children }: childrenObj) => {
	const [places, setPlaces] = useState<Place[]>([]);
	const [selected, setSelected] = useState<number>(0);
	const [myPlace, setMyPlace] = useState<string[]>([]);

	return (
		<PlaceState.Provider value={places}>
			<PlaceDispatch.Provider value={setPlaces}>
				<SelectedPlaceState.Provider value={selected}>
					<SelectedPlaceDispatch.Provider value={setSelected}>
						<MyPlaceState.Provider value={myPlace}>
							<MyPlaceDispatch.Provider value={setMyPlace}>
								{children}
							</MyPlaceDispatch.Provider>
						</MyPlaceState.Provider>
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

export function useMyPlaceState() {
	const context = useContext(MyPlaceState);
	return context;
}

export function useMyPlaceDispatch() {
	const context = useContext(MyPlaceDispatch);
	return context;
}
