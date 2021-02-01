import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PetsIcon from "@material-ui/icons/Pets";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

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

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh"
	},
	image: {
		backgroundColor: "#fafafa",
		backgroundSize: "cover"
	},
	paper: {
		margin: theme.spacing(12, 4, 22),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(4),
		width: "80px",
		height: "80px",
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	btn: {
		position: "fixed",
		left: "71%",
		top: "72%",
		width: "120px",
		height: "120px",
		borderRadius: "50%",
		zIndex: 1400
	}
}));

export default function SignInSide() {
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={9} className={classes.image} />
			<Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className={classes.btn}
				href="# "
			>
				둘러보기
			</Button>
			<Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<PetsIcon fontSize="large" />
					</Avatar>
					<Typography component="h1" variant="h5">
						FIT PET
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="ID"
							label="ID"
							name="ID"
							autoComplete="ID"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							size="large"
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="# " variant="body2">
									회원가입
								</Link>
							</Grid>
							<Grid item>
								<Link href="# " variant="body2">
									비밀번호 찾기
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={4}>
					<Copyright />
					<br />
					<ContactUs />
				</Box>
			</Grid>
		</Grid>
	);
}
