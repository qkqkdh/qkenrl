import React, { createContext, useContext, useState, Dispatch, useEffect } from 'react';
import { childrenObj, User } from '../utils/types';

const UserState = createContext<User | undefined>(undefined);
const UserDispatch = createContext<Dispatch<User>>(() => {});
const HeaderState = createContext('');
const HeaderDispatch = createContext<Dispatch<string>>(() => {});

export const UserContextProvider = ({ children }: childrenObj) => {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [header, setHeader] = useState('');

	useEffect(() => { // try login if browser has cookie

	}, []);
	return (
		<UserState.Provider value={user}>
			<UserDispatch.Provider value={setUser}>
				<HeaderState.Provider value={header}>
					<HeaderDispatch.Provider value={setHeader}>
						{children}
					</HeaderDispatch.Provider>
				</HeaderState.Provider>
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

export function useHeaderState() {
	const context = useContext(HeaderState);
	return context;
}

export function useHeaderDispatch() {
	const context = useContext(HeaderDispatch);
	return context;
}

