import React, { useState } from "react";
import {
	Avatar,
	Button,
	TextField,
	Link,
	Grid,
	Typography,
	Modal,
	IconButton,
	Paper
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import CloseIcon from '@material-ui/icons/Close';
import { Register } from ".";
import "../css/Login.scss";

const SignIn: React.FunctionComponent = () => {
	const [Open, setOpen] = useState(false);
	const [ropen, setRopen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const RegisterOpen = () => {
		handleClose();
		setRopen(true);
	};
	const RegisterClose = () => {
		setRopen(false);
	};
	return (
		<>
			<Button onClick={handleOpen} className="login-btn">Login</Button>
			<Modal
				open={Open}
				onClose={handleClose}
			>
				<Grid className="login-body">
					<Paper>
						<Grid className="right-sort">
							<IconButton className="close-btn" onClick={handleClose}>
								<CloseIcon fontSize="small" />
							</IconButton>
						</Grid>
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
									className="login-inputs"
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
							<Grid container className="sub-grid">
								<Grid item>
									<Button onClick={RegisterOpen} style={{ fontWeight: 400 }}>Register</Button>
								</Grid>
								<Grid item>|</Grid>
								<Grid item>
									<Link href="# " className="link">비밀번호 찾기</Link>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Modal>
			<Register ropen={ropen} closeHandler={RegisterClose} />
		</>
	);
};

export default SignIn;
