import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Introduction, PlacePage, NotFound, Main } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Introduction} />
			<Route path="/main" component={Main} />
			<Route path="/place/:mapId" component={PlacePage} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
