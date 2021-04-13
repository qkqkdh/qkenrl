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
import { Register } from ".";
import "../css/Login.scss";

const Modall: React.FunctionComponent = () => {
	const [Open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const getModalStyle = () => {
		const top = 50;
		const left = 50;
		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	};

	const body = (
		<div className="body" style={getModalStyle()}>
			<div className="rightSort">
				<IconButton className="closeBtn" onClick={handleClose}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</div>
			<Typography>회원가입</Typography>
			<Typography>회원가입</Typography>
			<Typography>회원가입</Typography>
			<Typography>회원가입</Typography>
			<Typography>회원가입</Typography>
			<Typography>회원가입</Typography>
			<Grid container className="login-container" />
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
};

export default Modall;
