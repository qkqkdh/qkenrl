import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Search, PetCustom, NotFound } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/pets" component={PetCustom} />
			<Route exact path="/search" component={Search} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
