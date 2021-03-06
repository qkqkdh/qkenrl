import React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { PlaceType, childrenObj } from './Type';

const SelectedPlace = createContext<PlaceType | undefined>(undefined);
const SetSelectedPlace = createContext<Dispatch<PlaceType | undefined>>(() => {});

export const PlaceLogicProvider = ({ children } : childrenObj) => {
	const [selected, setSelected] = useState<PlaceType | undefined>(undefined);

	return (
		<SelectedPlace.Provider value={selected}>
			<SetSelectedPlace.Provider value={setSelected}>
				{children}
			</SetSelectedPlace.Provider>
		</SelectedPlace.Provider>
	);
};

export function useSelectedPlace() {
	const context = useContext(SelectedPlace);
	return context;
}

export function useSetSelectedPlace() {
	const context = useContext(SetSelectedPlace);
	return context;
}
