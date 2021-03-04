import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Main, NotFound } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/main" component={Main} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
