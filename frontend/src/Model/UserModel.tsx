import React, { createContext, useContext, useState, Dispatch } from 'react';
import { childrenObj, UserType } from '../Type';

const UserState = createContext<UserType | undefined>(undefined);
const UserDispatch = createContext<Dispatch<UserType>>(() => {});

export const UserContextProvider = ({ children }: childrenObj) => {
	const obj: UserType = {
		name: "버금이",
		mail: "gmldms784@naver.com"
	};
	const [user, setUser] = useState<UserType>(obj);

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
