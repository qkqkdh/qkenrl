// Header Component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, Menu, MenuItem } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { SignIn } from ".";
import { useUserState } from "../Model/UserModel";

interface Props { }
const Header: React.FunctionComponent<Props> = () => {
	const User = useUserState();
	console.log(User);
	const name = "홍길동";
	const [isLogined, setIsLogined] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null);

	const handleClick = (event: React.SyntheticEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		if (User !== undefined) setIsLogined(true);
	}, [User]);

	return (
		<Grid className="header">
			<Grid className="h-title-con">
				<img src="/logo192.png" alt="logo" />
				<h1>BDCS</h1>
			</Grid>
			<Grid className="nav-con">
				<div>
					<Link to="/place">지도</Link>
				</div>
				<div>
					<Link to="/search">기능 1</Link>
				</div>
				<div>
					<Link to="/pets">기능 2</Link>
				</div>
			</Grid>
			<Grid className="profile-con">
				{
					isLogined ?
						<p>
							<strong>{name}</strong>
							님, 환영합니다!
						</p> : <SignIn />
				}
				{
					/*
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
					*/
				}
			</Grid>
		</Grid>
	);
};

export default Header;
