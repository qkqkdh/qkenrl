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
import "../css/Login.scss";

const SignIn: React.FunctionComponent = () => {
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
		<div className="login-body" style={getModalStyle()}>
			<div className="right-sort">
				<IconButton className="close-btn" onClick={handleClose}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</div>
			<Grid container className="login-container">
				<Avatar className="avatar">
					<PetsIcon fontSize="large" />
				</Avatar>
				<Typography className="title">BDCS</Typography>
				<form className="form" noValidate>
					<TextField
						variant="outlined"
						fullWidth
						size="small"
						required
						className="login-inputs"
						placeholder="ID"
						autoFocus
					/>
					<TextField
						variant="outlined"
						fullWidth
						size="small"
						required
						type="password"
						className="loginInputs"
						placeholder="PASSWORD"
						autoFocus
					/>
					<Button
						type="submit"
						variant="contained"
						size="large"
						fullWidth
						className="submit"
					>
						LOGIN
					</Button>
				</form>
				<Grid container className="register-grid">
					<Grid item>
						<Link href="# " className="link">회원가입</Link>
					</Grid>
					<Grid item>|</Grid>
					<Grid item>
						<Link href="# " className="link">비밀번호 찾기</Link>
					</Grid>
				</Grid>
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
};

export default SignIn;
