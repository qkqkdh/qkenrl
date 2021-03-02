import React from 'react';
import { PlaceContextProvider } from './Model/PlaceModel';
import Router from "./routes";

const Provider : React.FC = () => (
	<PlaceContextProvider>
		<Router />
	</PlaceContextProvider>
);

export default Provider;
