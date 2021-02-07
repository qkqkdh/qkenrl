import React from "react";
import '../css/Layout.scss';
import { Grid } from "@material-ui/core";

import { Header } from ".";

const Layout: React.FunctionComponent = ({ children }) => (
	<>
		<Header />
		<Grid id="wrap">
			{children}
		</Grid>
	</>
);

export default Layout;
