import React, { createContext, useContext, useState, Dispatch, useEffect } from 'react';
import { childrenObj, User } from '../utils/types';

const UserState = createContext<User | undefined>(undefined);
const UserDispatch = createContext<Dispatch<User>>(() => {});

export const UserContextProvider = ({ children }: childrenObj) => {
	const [user, setUser] = useState<User | undefined>(undefined);

	useEffect(() => { // try login if browser has cookie

	}, []);
	return (
		<UserState.Provider value={user}>
			<UserDispatch.Provider value={setUser}>
				{children}
			</UserDispatch.Provider>
		</UserState.Provider>
	);
};

export function useUserState() {
	const context = useContext(UserState);
	return context;
}

export function useUserDispatch() {
	const context = useContext(UserDispatch);
	return context;
}
