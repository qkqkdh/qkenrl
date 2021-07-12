import React from "react";
import { Grid, Link, Button, Avatar } from '@material-ui/core';
import PetsIcon from "@material-ui/icons/Pets";

const Intro: React.FunctionComponent = () => {
	const title = "BDCS";
	const slogan = () => (
		<>
			<p>반려견과 함께하는 행복한 일상을 더 편리하게 :)</p>
			<p>Better Dog Community Service</p>
		</>
	);
	return (
		<>
			<Grid className="intro-root">
				<div className="back-ground">
					<img src="https://user-images.githubusercontent.com/42960217/113842158-5d0aa280-97cd-11eb-9494-e2d064f3602b.png" alt="background" />
				</div>
				<Grid className="intro-container">
					<Avatar id="logo">
						<PetsIcon fontSize="large" />
					</Avatar>
					<Grid className="text-area">
						<Grid className="title-area">
							{title}
						</Grid>
						<Grid className="slogan-area">
							{slogan()}
						</Grid>
					</Grid>
					<Link id="btn-link" href="/place">
						<Button id="btn-go-service" variant="outlined">서비스 이용하러 가기→</Button>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Intro;
