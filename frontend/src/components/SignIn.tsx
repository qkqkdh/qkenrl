import React, { useState } from "react";
import { Avatar,
	Button,
	TextField,
	Link,
	Grid,
	Typography,
	Modal,
	IconButton,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import CloseIcon from '@material-ui/icons/Close';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/dghg/abao">
				BABAO
			</Link>
			{"  "}
			{new Date().getFullYear()}
			{". "}
		</Typography>
	);
}

function ContactUs() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			CONTACT US | 010-1234-5678 | abc123@gmail.com
		</Typography>
	);
}

function getModalStyle() {
	const top = 50;
	const left = 50;
	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

export default function SignInSide() {
	const [Open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div className="loginBody" style={getModalStyle()}>
			<div className="rightSort">
				<IconButton className="closeBtn">
					<CloseIcon fontSize="small" />
				</IconButton>
			</div>
			<Grid container className="loginContainer">
				<Avatar className="avatar">
					<PetsIcon fontSize="large" />
				</Avatar>
				<h2>Hi</h2>
			</Grid>
		</div>
	);
	return (
		<div>
			<Button onClick={handleOpen}>Login</Button>
			<Modal
				open={Open}
				onClose={handleClose}
				aria-labelledby="login-title"
			>
				{body}
			</Modal>
		</div>
	);
}
