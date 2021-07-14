import React from "react";
import { Grid } from "@material-ui/core";

import { Layout } from "../components";
import "../css/Login.scss";

const RegisterSuccess: React.FunctionComponent = () => (
	<Layout open={false} handleSideBarClose={() => null}>
		<Grid className="suc-con">
			<p className="suc-head">가입 완료</p>
			<Grid className="suc-body">
				{/* todo 로고 나중에 제대로 넣기 */}
				<Grid className="suc-logo">
					<img src="/img/dog.png" alt="mailimg" className="dog-img" />
					<p style={{ fontWeight: 'bold', fontSize: '2rem' }}>바둑스</p>
				</Grid>
				<p className="suc-sub-head">환영합니다!</p>
				<p className="suc-sub-body">
					회원가입이 완료되었습니다.
					<br />
					BDCS의 가입을 진심으로 환영합니다.
				</p>
				<Grid className="suc-box">
					<Grid className="suc-box-left">
						<p>이름</p>
						<p>아이디</p>
						<p>이메일</p>
					</Grid>
					<Grid className="suc-box-right">
						<p>이름 내용</p>
						<p>아이디 내용</p>
						<p>이메일 내용ddddddddddd</p>
					</Grid>
				</Grid>
				<Grid className="suc-btn-con">
					<a href="/place" className="btn">완료</a>
				</Grid>
			</Grid>
		</Grid>
	</Layout>
);

export default RegisterSuccess;
