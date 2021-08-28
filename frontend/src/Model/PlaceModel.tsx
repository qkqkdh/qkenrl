import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import axios from 'axios';
import { childrenObj, Place } from '../utils/types';

const userName = 'gmldms784'; // TODO: 로그인 연결되면 바꾸기

const PlaceState = createContext<Place[]>([]); // 검색 결과
const PlaceDispatch = createContext<Dispatch<Place[]>>(() => { });
const SelectedPlaceState = createContext<number>(-1);
const SelectedPlaceDispatch = createContext<Dispatch<number>>(() => { });
const MyPlaceState = createContext<string[]>([]);
const MyPlaceDispatch = createContext<Dispatch<string[]>>(() => {});
const FetchMyPlace = createContext<()=>void>(() => {});

export const PlaceContextProvider = ({ children }: childrenObj) => {
	const [places, setPlaces] = useState<Place[]>([]);
	const [selected, setSelected] = useState<number>(0);
	const [myPlace, setMyPlace] = useState<string[]>([]);

	const fetchMyPlace = () => {
		axios.get(`http://localhost:3001/place/my?userName=${userName}`, {
			withCredentials: true,
		})
			.then((res) => {
				setMyPlace(res.data);
			});
	};

	return (
		<PlaceState.Provider value={places}>
			<PlaceDispatch.Provider value={setPlaces}>
				<SelectedPlaceState.Provider value={selected}>
					<SelectedPlaceDispatch.Provider value={setSelected}>
						<MyPlaceState.Provider value={myPlace}>
							<MyPlaceDispatch.Provider value={setMyPlace}>
								<FetchMyPlace.Provider value={fetchMyPlace}>
									{children}
								</FetchMyPlace.Provider>
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

export function useFetchPlace() {
	const context = useContext(FetchMyPlace);
	return context;
}
