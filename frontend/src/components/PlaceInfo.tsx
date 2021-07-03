import React, { useEffect, useState } from "react";

import { Grid, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from "@material-ui/icons/Star";
import CreateIcon from "@material-ui/icons/Create";
import ShareIcon from '@material-ui/icons/Share';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Place } from "../utils/types";
import { ReviewModal, ModifyModal } from ".";
import { useSelectedPlaceDispatch } from '../Model/PlaceModel';

type SizeMap = ["sm", "lg"];
type PlaceProps = {
	size: SizeMap[number];
	place: Place;
	index : number;
}

const PlaceInfo = ({ size, place, index }: PlaceProps) => {
	const setSelected = useSelectedPlaceDispatch();

	const [sizeState, setSizeState] = useState<string>(size);
	const [reviewOpen, setReviewOpen] = useState<boolean>(false);
	const [modifyOpen, setModifyOpen] = useState<boolean>(false);
	const [reviewNumber, setReviewNumber] = useState<number>(2); // 보이는 review 갯수

	useEffect(() => {
		setSizeState(size);
	}, [size]);

	useEffect(() => {
		setReviewNumber(2); // 컴포넌트를 접으면 review 갯수 초기화
	}, [sizeState]);

	const handleReviewClose = () => setReviewOpen(false);
	const handleModifyClose = () => setModifyOpen(false);
	const handleClickMyPlace = () => { };
	/*
	const switchMyPlace = () => {
		place.info.isMyPlace = !place.info.isMyPlace;
		updatePlace(place);
	};
	*/

	const changeSelectedPlace = () => {
		setSelected(index);
	};

	const moreReview = () => setReviewNumber(reviewNumber + 2); // 2개씩 더 보여주기

	return (
		<Grid className="place-component" onClick={changeSelectedPlace}>
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
							<h4>{place.info.name}</h4>
							<h6>{place.info.category}</h6>
						</Grid>
						{
							place.info.isMyPlace ?
								<FavoriteIcon
									onClick={handleClickMyPlace}
								/> :
								<FavoriteBorderIcon
									onClick={handleClickMyPlace}
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
									{place.info.reviews.length ? place.info.reviews.map((review) => review.star).reduce((acc, cur) => acc + cur) / place.info.reviews.length : 0}
									/5
								</p>
							</div>
							{
								sizeState === "sm" &&
								<Button variant="outlined" onClick={() => setReviewOpen(true)}>
									<CreateIcon />
									<p>리뷰 작성</p>
								</Button>
							}
						</Grid>
						<Grid className="location">
							<ModifyModal
								open={modifyOpen}
								handleClose={handleModifyClose}
							/>
							{
								sizeState === "lg" &&
								<>
									<div className="button-group">
										<Button variant="outlined" onClick={() => setReviewOpen(true)}>
											<div>
												<CreateIcon fontSize="large" />
												<br />
												<p>리뷰 작성</p>
											</div>
										</Button>
										<Button variant="outlined">
											<div>
												<FavoriteIcon fontSize="large" />
												<p>내 장소 등록</p>
											</div>
										</Button>
										<Button variant="outlined">
											<div>
												<ShareIcon fontSize="large" />
												<p>공유하기</p>
											</div>
										</Button>
									</div>
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
								</>
							}
							<div>
								<strong>주소</strong>
								<p>{place.info.roadLocation}</p>
							</div>
							<div className="lot-number">
								<strong>지번</strong>
								<p>{place.info.location}</p>
							</div>
						</Grid>
						<Grid className="time-call">
							<div>
								<strong>영업시간</strong>
								<div>{place.info.timeInfo}</div>
							</div>
							<div>
								<strong>전화</strong>
								<p>{place.info.phone}</p>
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
								place.info.reviews.map((review, index) => {
									if (index >= reviewNumber) {
										return null;
									}

									let starString = "";
									for (let i = 0; i < review.star; i += 1) starString += "★";
									return (
										<Grid className="review-card">
											<Grid>{starString}</Grid>
											<Grid>{review.desc}</Grid>
										</Grid>
									);
								})
							}
							{
								place.info.reviews.length > reviewNumber &&
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
