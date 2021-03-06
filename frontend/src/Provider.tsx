import React from 'react';
import { PlaceContextProvider } from './Model/PlaceModel';
import { PlaceLogicProvider } from './ViewModel';
import Router from "./routes";

const Provider : React.FC = () => (
	<PlaceContextProvider>
		<PlaceLogicProvider>
			<Router />
		</PlaceLogicProvider>
	</PlaceContextProvider>
);

export default Provider;
