import React from "react";
import Header from "./Header";
import "./css/base/_reset.css";

const Layout: React.FunctionComponent = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default Layout;