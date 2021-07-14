import React, { useState } from "react";
import {
	Avatar,
	Button,
	TextField,
	Link,
	Grid,
	Typography,
	Modal,
	IconButton,
	Paper
} from "@material-ui/core";
import "../css/components/_suggestmodal.scss";

type Props = {
	open: boolean;
	handleClose: () => void;
}

const PlaceSuggestModal: React.FC<Props> = ({ open, handleClose }) => {
	const [name, setName] = useState("");
	const submitHandler = (e: any) => {
		e.preventDefault();
		console.log('hi');
	};
	return (
		<Modal open={open} onClose={handleClose}>
			<Grid className="modal-con">
				<Paper>
					<Grid>
						<Grid className="modal-title">장소제안하기</Grid>
					</Grid>
					<Button className="x-btn" onClick={handleClose}>X</Button>
					<Grid className="modal-title-des">
						<p>꼭 반려견이 출입 가능한 장소만 정확하게 등록해주세요</p>
						<p>여러분의 소중한 의견은 사이트를 개선하는 데에 큰 도움이 됩니다.</p>
					</Grid>
					<Grid className="modal-card-con">
						<Grid className="modal-card">
							<Grid className="modal-card-title">주소 검색</Grid>
							<form onSubmit={submitHandler}>
								<Grid className="modal-search-con">
									<TextField
										variant="outlined"
										placeholder="반려견 동반 가능 장소 검색"
									/>
									<Button className="modal-btn" variant="outlined" type="submit">검색</Button>
								</Grid>
							</form>
						</Grid>
						<Grid className="modal-card">
							<Grid className="modal-card-title">한줄평 작성</Grid>
							<TextField
								variant="outlined"
								multiline
								placeholder="한줄평을 남겨주세요."
								inputProps={{ style: { height: '10vh', overflow: 'auto' } }}
							/>
						</Grid>
						<Grid className="modal-title-des2">
							<p>장소를 제안해주셔서 감사합니다 :)</p>
						</Grid>
						<Grid className="modal-btn-con">
							<Button className="modal-btn" variant="outlined" onClick={handleClose}>취소</Button>
							<Button className="modal-btn" variant="outlined">제출</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Modal>
	);
};

export default PlaceSuggestModal;
