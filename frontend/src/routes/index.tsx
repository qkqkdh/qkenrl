import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, PetCustom, SetPet, Search, Account, NotFound } from "../pages";

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/pets" component={PetCustom} />
			<Route exact path="/pets/add" component={SetPet} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/account" component={Account} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
