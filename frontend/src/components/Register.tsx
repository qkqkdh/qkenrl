import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
	TextField,
	Button,
	CircularProgress,
	Modal,
	IconButton,
	Grid,
	Typography,
	Stepper,
	Step,
	StepLabel,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import "../css/Login.scss";

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
	const [open, setopen] = useState<boolean>(false);
	const [activeStep, setActiveStep] = React.useState(0);

	const onSubmit = (data: FormData) => {
		// 폼 버튼 클릭 시 호출
		setLogin(true);
		const { id, password, email } = data;
		axios
			.post("/api/auth/signup", { id, password, email }) // /api/register API 에 데이터 전달 및 호출, 비밀번호는 암호화 해서 보내야 함  !
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

	const getModalStyle = () => {
		const top = 50;
		const left = 50;
		return {
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	};

	const steps = ['약관동의', '정보입력', '이메일 인증'];

	const Openhandler = () => {
		setopen(true);
	};
	const Closehandler = () => {
		setopen(false);
	};
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const body = (
		<div className="login-body" style={getModalStyle()}>
			<div className="right-sort">
				<IconButton className="close-btn" onClick={Closehandler}>
					<CloseIcon fontSize="small" />
				</IconButton>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container className="login-container">
					<Typography className="register-title">회원가입</Typography>
					<Stepper activeStep={activeStep} alternativeLabel className="stepper">
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
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
				</Grid>
			</form>
		</div>
	);
	return (
		<>
			<Button onClick={Openhandler}>Register</Button>
			<Modal open={open} onClose={Closehandler}>{body}</Modal>
		</>
	);
};

export default Register;
