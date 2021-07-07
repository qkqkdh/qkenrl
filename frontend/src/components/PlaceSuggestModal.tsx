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

type Props = {
	open: boolean;
	handleClose: () => void;
}

const PlaceSuggestModal: React.FC<Props> = ({ open, handleClose }) => {
	const [name, setName] = useState("");
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
							<Grid className="modal-card-title">별점</Grid>
						</Grid>
						<Grid className="modal-card">
							<Grid className="modal-card-title">한줄평 작성</Grid>
							<TextField
								variant="outlined"
								placeholder="한줄평을 남겨주세요."
							/>
						</Grid>
						<Grid className="modal-btn-con">
							<Button className="modal-btn" variant="outlined">등록하기</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Modal>
	);
};

export default PlaceSuggestModal;
