import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Introduction, PlacePage, NotFound, RegisterSuccess } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Introduction} />
			<Route path="/place" component={PlacePage} />
			<Route path="/reg-suc" component={RegisterSuccess} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
