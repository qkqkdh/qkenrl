import React from 'react';
import { PlaceContextProvider } from './Model/PlaceModel';
import { PlaceLogicProvider } from './ViewModel';
import Router from "./routes";
import { UserContextProvider } from './Model/UserModel';

const Provider : React.FC = () => (
	<UserContextProvider>
		<PlaceContextProvider>
			<PlaceLogicProvider>
				<Router />
			</PlaceLogicProvider>
		</PlaceContextProvider>
	</UserContextProvider>
);

export default Provider;
