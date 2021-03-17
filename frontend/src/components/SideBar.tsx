import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Drawer } from "@material-ui/core";

import { Header } from ".";

type Props = {
	open: boolean;
	handleSideBarClose: () => void;
}

const SideBar = ({ open, handleSideBarClose }: Props) => {
	// todo : 안에 요소들 다 component로 만들고 같이 쓰면 될듯 => css만 변환
	const name = "홍길동";
	const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null);

	const handleClick = (event: React.SyntheticEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Drawer
			anchor="left"
			open={open}
			onClose={handleSideBarClose}
			className="side-bar"
		>
			<Header />
		</Drawer>
	);
};

export default SideBar;
