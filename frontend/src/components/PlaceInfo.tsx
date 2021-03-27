import React, { useEffect, useState } from "react";

import { Grid, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from "@material-ui/icons/Star";
import CreateIcon from "@material-ui/icons/Create";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { PlaceType } from "../Type";
import { ReviewModal, ModifyModal } from ".";
import { useUpdatePlace } from '../ViewModel';

type SizeMap = ["sm", "lg"];
type PlaceProps = {
	size: SizeMap[number];
	place: PlaceType;
}

const PlaceInfo = ({ size, place }: PlaceProps) => {
	const [sizeState, setSizeState] = useState<string>(size);
	const [reviewOpen, setReviewOpen] = useState<boolean>(false);
	const [modifyOpen, setModifyOpen] = useState<boolean>(false);
	const [reviewNumber, setReviewNumber] = useState<number>(2); // 보이는 review 갯수
	const updatePlace = useUpdatePlace();

	useEffect(() => {
		setSizeState(size);
	}, [size]);

	useEffect(() => {
		setReviewNumber(2); // 컴포넌트를 접으면 review 갯수 초기화
	}, [sizeState]);

	const handleReviewClose = () => setReviewOpen(false);
	const handleModifyClose = () => setModifyOpen(false);

	const switchMyPlace = () => {
		place.isMyPlace = !place.isMyPlace;
		updatePlace(place);
	};

	const moreReview = () => setReviewNumber(reviewNumber + 2); // 2개씩 더 보여주기

	return (
		<Grid className="place-component">
			{
				place &&
				<>
					<Grid className="place-arrow">
						{
							sizeState === "sm" ?
								<ExpandMoreIcon onClick={() => setSizeState("lg")} /> : <ExpandLessIcon onClick={() => setSizeState("sm")} />
						}
					</Grid>
					<Grid className="place-header">
						<Grid>
							<h4>{place.name}</h4>
							<h6>{place.type}</h6>
						</Grid>
						{
							place.isMyPlace ?
								<FavoriteIcon
									onClick={switchMyPlace}
								/> :
								<FavoriteBorderIcon
									onClick={switchMyPlace}
								/>
						}
					</Grid>
					<Grid className="place-info">
						<Grid>
							<ReviewModal
								open={reviewOpen}
								handleClose={handleReviewClose}
							/>
							<div>
								<StarIcon />
								<p>
									{place.star}
									/5
								</p>
							</div>
							<Button variant="outlined" onClick={() => setReviewOpen(true)}>
								<CreateIcon />
								<p>리뷰 작성</p>
							</Button>
						</Grid>
						<Grid className="location">
							<ModifyModal
								open={modifyOpen}
								handleClose={handleModifyClose}
							/>
							{
								sizeState === "lg" &&
								<div>
									<strong>정보</strong>
									<p>
										<strong>{place.setMember}</strong>
										님께서 등록하신 장소입니다.
									</p>
									<Button onClick={() => setModifyOpen(true)}>
										정보수정 요청
									</Button>
								</div>
							}
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
								place.review.map((review, index) => {
									if (index >= reviewNumber) {
										return null;
									}

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
							{
								place.review.length > reviewNumber &&
								<Button onClick={moreReview}>더보기</Button>
							}
						</Grid>
					}
				</>
			}
		</Grid>
	);
};

export default PlaceInfo;
