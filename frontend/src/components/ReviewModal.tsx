import React, { useState } from 'react';

import { Modal, Grid, Paper, Button, TextField, Select } from '@material-ui/core';
import { Star } from '.';

type Props = {
	open: boolean;
	handleClose: () => void;
}

const ReviewModal: React.FC<Props> = ({ children, open, handleClose }) => {
	const name = "업체명";
	const [star, setStar] = useState<number>(3);

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
							<Star
								star={star}
								setStar={setStar}
							/>
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

export default ReviewModal;
