import React, { useEffect, useState } from "react";

import { Grid, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import CreateIcon from "@material-ui/icons/Create";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { usePlaceState } from "../Model/PlaceModel";
import { PlaceType } from "../Type";
import { useSelectedPlace, useSetSelectedPlace } from "../ViewModel";

type SizeMap = ["sm", "lg"];
type PlaceProps = {
	size: SizeMap[number];
	place: PlaceType;
}

const PlaceInfo = ({ size, place }: PlaceProps) => {
	const places = usePlaceState();
	const selected = useSelectedPlace();
	const setSelected = useSetSelectedPlace();

	const [sizeState, setSizeState] = useState<string>(size);

	useEffect(() => {
		setSizeState(size);
	}, [size]);

	return (
		<Grid className="place-component">
			{
				place &&
				<>
					<Grid className="place-header">
						<Grid>
							<h4>{place.name}</h4>
							<h6>{place.type}</h6>
						</Grid>
						<FavoriteIcon />
						{sizeState}
						{
							sizeState === "sm" ?
								<ExpandLessIcon onClick={() => setSizeState("lg")} /> : <ExpandMoreIcon onClick={() => setSizeState("sm")} />
						}
					</Grid>
					<Grid className="place-info">
						<Grid>
							<p>
								<StarIcon />
								{place.star}
								/5
							</p>
							<Button variant="outlined">
								<CreateIcon />
								리뷰 작성
							</Button>
						</Grid>
						<Grid className="location">
							<p>
								<strong>주소</strong>
								{place.location}
							</p>
							<p className="lot-number">
								<strong>지번</strong>
								{place.lotNumber}
							</p>
						</Grid>
						<Grid>
							<p>
								<strong>영업시간</strong>
								{place.time}
							</p>
							<p>
								<strong>전화</strong>
								{place.phone}
							</p>
						</Grid>
					</Grid>
				</>
			}
		</Grid>
	);
};

export default PlaceInfo;
