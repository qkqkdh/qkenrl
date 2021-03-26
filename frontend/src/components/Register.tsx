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
	Paper,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MailImg from '../assets/email.png';
import "../css/Login.scss";

type Props = {
	// Props 정의
};

type FormData = {
	id: string;
	password: string;
	email: string;
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

const getSteps = () => ['약관동의', '정보입력', '이메일 인증'];

function getStepContent(step:number) {
	const [value, setValue] = useState('disagree');
	const valueHandle = (e:any) => {
		setValue(e.target.value);
	};
	const [value2, setValue2] = useState('disagree');
	const value2Handle = (e:any) => {
		setValue2(e.target.value);
	};
	const [email, setEmail] = useState('abc@defg');
	const agreeContent = (
		<>
			<p>제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.</p>
			<p>국가안전보장회의는 대통령이 주재한다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다.</p>
			<p>헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.</p>
		</>
	);
	const finalContent = (
		<div className="final-content">
			<Typography variant="body2">
				가입하신 메일(
				{email}
				)로 인증메일이 발송되며,
				<br />
				메일을 확인하셔야 가입이 완료됩니다.
				<br />
				메일 확인 후 인증완료 버튼을 눌러주시면 BDCS를 이용하실 수 있습니다.
			</Typography>
		</div>
	);
	const finalPs = (
		<Typography variant="body2">
			1. 인증메일은 발송 시점으로부터 24시간 동안만 유효하며, 재발송 시 기존 인증코드는 만료됩니다. 반드시 마지막에 수신된 메일을 확인 바랍니다.
			<br />
			2. 메일이 도착하지 않았다면, 스팸함을 확인해주시기 바랍니다.
		</Typography>
	);
	switch (step) {
	case 0:
		return (
			<Grid container className="stepzero-grid">
				<Typography className="register-subhead">회원 이용 약관</Typography>
				<Paper variant="outlined" className="agree-content">{agreeContent}</Paper>
				<FormControl className="radio-content">
					<Typography variant="body2">동의하십니까?</Typography>
					<RadioGroup value={value} onChange={valueHandle} className="radio-group">
						<FormControlLabel value="agree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">예</Typography>} />
						<FormControlLabel value="disagree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">아니오</Typography>} />
					</RadioGroup>
				</FormControl>
				<Typography className="register-subhead">개인정보수집동의에 대한 고지사항</Typography>
				<Paper variant="outlined" className="agree-content">{agreeContent}</Paper>
				<FormControl className="radio-content">
					<Typography variant="body2">동의하십니까?</Typography>
					<RadioGroup value={value2} onChange={value2Handle} className="radio-group">
						<FormControlLabel value="agree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">예</Typography>} />
						<FormControlLabel value="disagree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">아니오</Typography>} />
					</RadioGroup>
				</FormControl>
			</Grid>
		);
	case 1:
		return (
			<Grid container className="stepzero-grid">
				<Typography className="register-subhead">정보입력</Typography>
			</Grid>
		);
	case 2:
		return (
			<Grid container className="stepfinal-grid">
				<img src={MailImg} alt="mailimg" className="mail-img" />
				<Typography className="stepfinal-head">인증 메일이 발송되었습니다.</Typography>
				{finalContent}
				<Paper className="stepfinal-ps" elevation={0} square>
					<Typography className="register-subhead">유의사항</Typography>
					{finalPs}
					<Button variant="contained">인증 메일 재발송</Button>
				</Paper>
			</Grid>
		);
	default:
		return 'Unknown step';
	}
}

const Register: React.FunctionComponent<Props> = ({ children }) => {
	const { register, handleSubmit, reset } = useForm(); // form 컨트롤 라이브러리 react-hook-form 사용
	const [login, setLogin] = useState<boolean>(false); // 로그인 중인지 chk 하는 state
	const [open, setopen] = useState<boolean>(false);
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

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

	const body = (
		<div className={`${`login-body`} ${`register-body`}`} style={getModalStyle()}>
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
					{getStepContent(activeStep)}
					<Grid container className="register-btngroup" spacing={2}>
						{activeStep === 0 ? (
							<Grid item className="register-btn">
								<Button onClick={Closehandler} variant="outlined" fullWidth>취소</Button>
							</Grid>
						) : (
							<Grid item className="register-btn">
								<Button onClick={handleBack} variant="outlined" startIcon={<ArrowBackIcon />} fullWidth>이전</Button>
							</Grid>
						)}
						{activeStep === steps.length - 1 ? (
							<Grid item className="register-btn">
								<Button onClick={Closehandler} variant="outlined" fullWidth>마침</Button>
							</Grid>
						) : (
							<Grid item className="register-btn">
								<Button onClick={handleNext} variant="outlined" endIcon={<ArrowForwardIcon />} fullWidth>다음</Button>
							</Grid>
						)}
					</Grid>
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
