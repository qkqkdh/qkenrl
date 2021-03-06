import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Introduction, PlacePage, NotFound } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Introduction} />
			<Route path="/place/:mapId/:placeId" component={PlacePage} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
