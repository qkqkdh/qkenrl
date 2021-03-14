import React from "react";
import { Grid, Link, Button, Avatar } from '@material-ui/core';
import PetsIcon from "@material-ui/icons/Pets";

const Intro: React.FunctionComponent = () => {
	const title = "BDKS";
	const slogan = () => (
		<>
			<p>반려견과 함께하는 행복한 일상을 더 편리하게 :)</p>
			<p>슬로건슬로건슬로건슬로건</p>
		</>
	);
	return (
		<Grid className="intro-root">
			<div className="back-ground">
				<img src="https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80" alt="background" />
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
	);
};

export default Intro;
