import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { TextField, Button, CircularProgress } from "@material-ui/core";

type Props = {
	// Props 정의
};

type FormData = {
	id: string;
	password: string;
	email: string;
};

const Register: React.FunctionComponent<Props> = ({ children }) => {
	const { register, handleSubmit, reset } = useForm(); // form 컨트롤 라이브러리 react-hook-form 사용
	const [login, setLogin] = useState<boolean>(false); // 로그인 중인지 chk 하는 state

	const onSubmit = (data: FormData) => {
		// 폼 버튼 클릭 시 호출
		setLogin(true);
		const { id, password, email } = data;
		axios
			.post("/api/auth/signup", { id, password, email }) // /api/register API 에 데이터 전달 및 호출, 비밀번호는 암호화 해서 보내야ㅏ 함  !
			.then((response) => {
				if (response.status === 200) {
					// 요청 성공 시
					alert("회원가입 성공했습니다.");
					reset();
				}
			})
			.catch((err) => {
				// 요청 실패 시.
				if (err.response) {
					const { status } = err.response;
					if (status === 400) {
						alert("이미 존재하는 아이디가 있습니다.");
					} else {
						alert("잠시 후 다시 시도해주세요.");
					}
				}
			});
		setLogin(false);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField name="id" placeholder="ID" inputRef={register} />
				<TextField
					name="password"
					placeholder="PASSWORD"
					type="password"
					inputRef={register}
				/>
				<TextField
					name="email"
					placeholder="EMAIL"
					type="email"
					inputRef={register}
				/>
				{login ? <CircularProgress /> : <Button type="submit">회원가입</Button>}
			</form>
		</>
	);
};

export default Register;
