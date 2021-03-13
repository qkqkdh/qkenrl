import React from "react";

import { Intro, Register, SignIn } from "../components";
import "../css/Introduction.scss";

const Introduction: React.FunctionComponent = () => (
	<>
		<Register />
		<SignIn />
	</>
);

export default Introduction;
