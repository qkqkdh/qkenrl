import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { InitializeMap, createMarker } from "../utils/f";
import { Center, Place } from "../utils/types";

// Map 코드 작성
type Props = {
}
const { kakao } = window;
const Map: React.FunctionComponent<Props> = () => (
	<div id="map" />
);

export default Map;
