import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "../pages/Search";
import Index from "../pages/index";
import NotFound from "../pages/404";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route path="/search" component={Search} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
