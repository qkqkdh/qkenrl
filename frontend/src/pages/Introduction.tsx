import React from "react";

import { Intro, SignIn } from "../components";
import "../css/Introduction.scss";

const Introduction: React.FunctionComponent = () => (
	<>
		<Intro />
		<SignIn />
	</>
);

export default Introduction;
