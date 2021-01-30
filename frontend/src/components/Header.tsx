// Header Component
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

interface Props {}
const Header: React.FunctionComponent<Props> = () => {
	const name = "홍길동";
	const [open, setOpen] = useState(false);

	return (
		<Grid className="header">
			<Grid className="h-title-con">
				<img src="/logo192.png" alt="logo" />
				<h1>FIT PET</h1>
			</Grid>
			<Grid className="nav-con">
				<span>
					<Link to="/pets">마이펫</Link>
				</span>
				<span>
					<Link to="/search">검색</Link>
				</span>
				<span>
					<Link to="/search">검색</Link>
				</span>
				<span>
					<Link to="/search">검색</Link>
				</span>
			</Grid>
			<Grid className="profile-con">
				<p>
					<strong>{name}</strong>
					님, 환영합니다!
				</p>
				<span>
					<KeyboardArrowDownIcon onClick={() => setOpen(true)} />
				</span>
			</Grid>
		</Grid>
	);
};

export default Header;
