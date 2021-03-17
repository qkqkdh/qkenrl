import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid, Menu, MenuItem, Drawer } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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
			<Grid className="nav-con">
				<span>
					<Link to="/main">지도</Link>
				</span>
				<span>
					<Link to="/search">기능 1</Link>
				</span>
				<span>
					<Link to="/pets">기능 2</Link>
				</span>
			</Grid>
			<Grid className="profile-con">
				<p>
					<strong>{name}</strong>
					님, 환영합니다!
				</p>
				<button
					className="menu-btn"
					type="button"
					onClick={(e) => handleClick(e)}
				>
					<KeyboardArrowDownIcon />
				</button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</Grid>
		</Drawer>
	);
};

export default SideBar;
