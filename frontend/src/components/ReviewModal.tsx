import React from 'react';

import { Modal, Grid, Paper, Button, TextField, Select } from '@material-ui/core';

type Props = {
	open: boolean;
	handleClose: () => void;
}

const ReviewModal: React.FC<Props> = ({ children, open, handleClose }) => {
	const name = "업체명";
	return (
		<Modal
			open={open}
			onClose={handleClose}
		>
			<Grid className="modal-con review-modal">
				<Paper>
					<Grid>
						<Grid className="modal-title">후기 등록하기</Grid>
					</Grid>
					<Button className="x-btn" onClick={handleClose}>X</Button>
					<Grid className="review-shop-name">
						{`${name}의 후기 작성하기`}
					</Grid>
					<Grid className="modal-card-con">
						<Grid className="modal-card">
							<Grid className="modal-card-title">별점</Grid>
							{
								// 별점 하기 => 더블 슬래시 참고
							}
						</Grid>
						<Grid className="modal-card">
							<Grid className="modal-card-title">한줄평 작성</Grid>
							<TextField
								variant="outlined"
								placeholder="한줄평을 남겨주세요."
							/>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Modal>
	);
};

export default ReviewModal;
