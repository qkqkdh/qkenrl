import React from "react";
import '../css/Layout.scss';
import { Grid } from "@material-ui/core";

import { Header, SideBar } from ".";

type Props = {
	open: boolean;
	handleSideBarClose: () => void;
}

const Layout: React.FunctionComponent<Props> = ({ children, open, handleSideBarClose }) => {
	const a = 1;
	return (
		<>
			<Header />
			<SideBar open={open} handleSideBarClose={handleSideBarClose} />
			<Grid id="wrap">
				{children}
			</Grid>
		</>
	);
};

export default Layout;
