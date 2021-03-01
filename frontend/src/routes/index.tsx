import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, PlacePage, PlaceInfoPage, NotFound } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/place" component={PlacePage} />
			<Route path="/place/:id" component={PlaceInfoPage} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
