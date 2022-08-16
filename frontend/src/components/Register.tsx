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
import "../css/Login.scss";
import { API_URL } from "../utils/CommonVariables";

type Props = {
	// Props 정의
	ropen: boolean
	closeHandler: () => void
};
type stepProps = {
	activeStep: number
	value: string
	value2: string
	valueHandle: (e:any) => void
	value2Handle: (e:any) => void
	name: string
	id: string
	pw: string
	pwCheck: string
	email: string
	setName: React.Dispatch<React.SetStateAction<string>>
	setId: React.Dispatch<React.SetStateAction<string>>
	setPw: React.Dispatch<React.SetStateAction<string>>
	setPwCheck: React.Dispatch<React.SetStateAction<string>>
	setEmail: React.Dispatch<React.SetStateAction<string>>
};

const getSteps = () => ['약관동의', '정보입력', '이메일 인증'];

function getStepContent(props:stepProps) {
	// <-- props, state
	const [helper, setHelper] = useState('');
	const pwCheckHandler = (e:any) => {
		setPwCheck(e.target.value);
		if (e.target.value === pw) {
			setHelper('');
		} else {
			setHelper('비밀번호가 다릅니다.');
		}
	};
	const {
		activeStep,
		value,
		value2,
		valueHandle,
		value2Handle,
		name,
		id,
		pw,
		pwCheck,
		email,
		setName,
		setId,
		setPw,
		setPwCheck,
		setEmail,
	} = props;
	// props, state -->
	// <-- 내용 모음
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
	// 내용 모음 -->
	const idCheck = async () => { // api 미완
		try {
			const res = axios.get(`${API_URL}/user/verification?id=${id}`);
		} catch (err) {
			console.log(err);
		}
	};
	switch (activeStep) {
	case 0:
		return (
			<>
				<Grid className="agree-grid">
					<Typography className="register-subhead">회원 이용 약관</Typography>
					<Paper variant="outlined" className="agree-content">{agreeContent}</Paper>
					<FormControl className="radio-content">
						<Typography variant="body2">동의하십니까?</Typography>
						<RadioGroup value={value} onChange={valueHandle} className="radio-group">
							<FormControlLabel value="agree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">예</Typography>} />
							<FormControlLabel value="disagree" control={<Radio color="default" size="small" />} label={<Typography variant="body2">아니오</Typography>} />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid className="agree-grid">
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
			</>
		);
	case 1:
		return (
			<>
				<Typography className="register-subhead">정보입력</Typography>
				<Grid className="stepfirst-grid-con">
					<Grid className="stepfirst-grid">
						<Grid className="grid-left">이름</Grid>
						<Grid className="grid-right">
							<TextField value={name} onChange={(e:any) => setName(e.target.value)} variant="outlined" style={{ width: '70%' }} />
						</Grid>
					</Grid>
					<Grid className="stepfirst-grid">
						<Grid className="grid-left">아이디</Grid>
						<Grid className="grid-right">
							<TextField value={id} onChange={(e:any) => setId(e.target.value)} variant="outlined" style={{ width: '70%' }} />
							<Button
								variant="contained"
								style={{ padding: '2px 10px', background: 'green', color: 'white', marginLeft: 10, borderRadius: 30, boxShadow: 'none' }}
							>
								중복확인
							</Button>
						</Grid>
					</Grid>
					<Grid className="stepfirst-grid">
						<Grid className="grid-left">비밀번호</Grid>
						<Grid className="grid-right">
							<TextField
								value={pw}
								onChange={(e:any) => setPw(e.target.value)}
								variant="outlined"
								type="password"
								style={{ width: '70%' }}
							/>
						</Grid>
					</Grid>
					<Grid className="stepfirst-grid">
						<Grid className="grid-left">비밀번호 확인</Grid>
						<Grid className="grid-right">
							<TextField
								value={pwCheck}
								onChange={pwCheckHandler}
								variant="outlined"
								type="password"
								style={{ width: '70%' }}
								helperText={helper}
							/>
						</Grid>
					</Grid>
					<Grid className="stepfirst-grid">
						<Grid className="grid-left">이메일</Grid>
						<Grid className="grid-right">
							<TextField
								value={email}
								onChange={(e:any) => setEmail(e.target.value)}
								variant="outlined"
								type="email"
								style={{ width: '70%' }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	case 2:
		return (
			<Grid className="stepfinal-grid">
				<Grid className="stepfinal-head-con">
					<img src="/img/email.png" alt="mailimg" className="mail-img" />
					<Typography className="stepfinal-head">인증 메일이 발송되었습니다.</Typography>
				</Grid>
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

const Register: React.FunctionComponent<Props> = ({ ropen, closeHandler }) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [value, setValue] = useState('disagree');
	const valueHandle = (e:any) => {
		setValue(e.target.value);
	};
	const [value2, setValue2] = useState('disagree');
	const value2Handle = (e:any) => {
		setValue2(e.target.value);
	};
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [pwCheck, setPwCheck] = useState('');
	const [email, setEmail] = useState('');
	const steps = getSteps();

	const handleNext = async () => {
		if (activeStep === 0) {
			if (value === "agree" && value2 === "agree") {
				setActiveStep((prevActiveStep) => prevActiveStep + 1);
			} else {
				alert('약관에 동의해주세요.');
			}
		} else if (activeStep === 1) {
			if (id === '' || pw === '' || email === '') {
				alert('입력 칸을 채워주세요.');
			} else if (pw !== pwCheck) {
				alert('비밀번호가 다릅니다.');
			} else {
				try {
					const result = await axios.post(`${API_URL}/user/signup`, {
						id,
						password: pw,
						email
					});
					setActiveStep((prevActiveStep) => prevActiveStep + 1);
				} catch (err) {
					alert(err.response.data);
				}
			}
		}
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			<Modal open={ropen} onClose={closeHandler}>
				<Grid className="register-body">
					<Paper className="register-paper">
						<Grid className="right-sort">
							<IconButton className="close-btn" onClick={closeHandler}>
								<CloseIcon fontSize="small" />
							</IconButton>
						</Grid>
						<Grid className="register-content">
							<Typography className="register-title">회원가입</Typography>
							<Stepper activeStep={activeStep} alternativeLabel className="stepper">
								{steps.map((label) => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								))}
							</Stepper>
							<Grid className="step-grid">
								{getStepContent({ activeStep, value, value2, valueHandle, value2Handle, name, id, pw, pwCheck, email, setName, setId, setPw, setEmail, setPwCheck })}
							</Grid>
						</Grid>
						<Grid container className="register-btngroup" spacing={2}>
							{activeStep === 0 ? (
								<Grid item className="register-btn">
									<Button onClick={closeHandler} variant="outlined" fullWidth>취소</Button>
								</Grid>
							) : (
								<Grid item className="register-btn">
									<Button onClick={handleBack} variant="outlined" startIcon={<ArrowBackIcon />} fullWidth>이전</Button>
								</Grid>
							)}
							{activeStep === steps.length - 1 ? (
								<Grid item className="register-btn">
									<Button onClick={closeHandler} variant="outlined" fullWidth>마침</Button>
								</Grid>
							) : (
								<Grid item className="register-btn">
									<Button onClick={handleNext} variant="outlined" endIcon={<ArrowForwardIcon />} fullWidth>다음</Button>
								</Grid>
							)}
						</Grid>
					</Paper>
				</Grid>
			</Modal>
		</>
	);
};

export default Register;
