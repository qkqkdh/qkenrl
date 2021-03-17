import React, { useEffect, useState } from "react";

import { Grid, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import CreateIcon from "@material-ui/icons/Create";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { PlaceType } from "../Type";
import { useSelectedPlace, useSetSelectedPlace } from "../ViewModel";

type SizeMap = ["sm", "lg"];
type PlaceProps = {
	size: SizeMap[number];
	place: PlaceType;
}

const PlaceInfo = ({ size, place }: PlaceProps) => {
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
							<div>
								<StarIcon />
								<p>
									{place.star}
									/5
								</p>
							</div>
							<Button variant="outlined">
								<CreateIcon />
								<p>리뷰 작성</p>
							</Button>
						</Grid>
						<Grid className="location">
							<div>
								<strong>주소</strong>
								<p>{place.location}</p>
							</div>
							<div className="lot-number">
								<strong>지번</strong>
								<p>{place.lotNumber}</p>
							</div>
						</Grid>
						<Grid className="time-call">
							<div>
								<strong>영업시간</strong>
								<div>
									<p>{place.time}</p>
									<p>{place.time}</p>
								</div>
							</div>
							<div>
								<strong>전화</strong>
								<p>{place.phone}</p>
							</div>
						</Grid>
					</Grid>
					{
						sizeState === "lg" &&
						<Grid className="review-con">
							<Grid className="review-title">
								<p>방문자 한줄평</p>
							</Grid>
							{
								place.review.map((review) => {
									let starString = "";
									for (let i = 0; i < review.star; i += 1) starString += "★";
									return (
										<Grid className="review-card">
											<Grid>{starString}</Grid>
											<Grid>{review.contents}</Grid>
										</Grid>
									);
								})
							}
						</Grid>
					}
				</>
			}
		</Grid>
	);
};

export default PlaceInfo;
