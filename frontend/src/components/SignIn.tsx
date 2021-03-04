import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PetsIcon from "@material-ui/icons/Pets";
import Typography from "@material-ui/core/Typography";

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

export default function SignInSide() {
	return (
		<Grid container component="main" className="root">
			<CssBaseline />
			<Grid
				item
				xs={false}
				sm={4}
				md={9}
				className="image"
				component={Paper}
				elevation={6}
				square
			>
				<span>
					<h1>한눈에 보는 당신의 반려동물</h1>
					..이 들어갈 예정
				</span>
			</Grid>
			<Grid
				item
				className="paperBG"
				xs={12}
				sm={8}
				md={3}
				component={Paper}
				elevation={6}
				square
			>
				<div className="paper">
					<Avatar className="avatar">
						<PetsIcon fontSize="large" />
					</Avatar>
					<h1>FIT PET</h1>
					<form className="form" noValidate>
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
							className="submit"
						>
							Sign In
						</Button>
						<Grid container justify="center" spacing={2}>
							<Grid item>
								<Link href="# " variant="body2">
									회원가입
								</Link>
							</Grid>
							<Grid item>|</Grid>
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
			<Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className="btn"
				href="/main"
			>
				둘러보기
			</Button>
		</Grid>
	);
}
