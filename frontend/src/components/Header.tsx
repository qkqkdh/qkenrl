// Header Component
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

interface Props { }
const Header: React.FunctionComponent<Props> = () => {
	const name = "홍길동";
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null);

	const handleClick = (event: React.SyntheticEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Grid className="header">
			<Grid className="h-title-con">
				<img src="/logo192.png" alt="logo" />
				<h1>BDCS</h1>
			</Grid>
			<Grid className="nav-con">
				<div>
					<Link to="/main">지도</Link>
				</div>
				<div>
					<Link to="/search">기능 1</Link>
				</div>
				<div>
					<Link to="/pets">기능 2</Link>
				</div>
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
		</Grid>
	);
};

export default Header;
