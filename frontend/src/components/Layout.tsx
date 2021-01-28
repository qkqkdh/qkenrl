import React from "react";
import Header from "./Header";

const Layout: React.FunctionComponent = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default Layout;
