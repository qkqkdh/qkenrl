import React from 'react';

import { Modal, Grid, Paper, Button, TextField, Select } from '@material-ui/core';

type Props = {
	open: boolean;
	handleClose: () => void;
}

const ModifyModal: React.FC<Props> = ({ children, open, handleClose }) => {
	const name = "업체명";
	return (
		<Modal
			open={open}
			onClose={handleClose}
		>
			<Grid className="modal-con review-modal">
				<Paper>
					<Grid>
						<Grid className="modal-title">해당 장소 정보에 관하여 운영진에게 수정을 요청하시겠습니까?</Grid>
					</Grid>
					<Button className="x-btn" onClick={handleClose}>X</Button>
					<Grid className="modal-card-con">
						<Grid className="modal-card">
							<TextField
								variant="outlined"
								placeholder="수정요청사항을 적어주세요."
							/>
						</Grid>
					</Grid>
					<Grid className="modal-btn-con">
						<Button className="modal-btn" variant="contained" color="primary">확인</Button>
						<Button className="modal-btn" variant="outlined" onClick={handleClose}>취소</Button>
					</Grid>
				</Paper>
			</Grid>
		</Modal>
	);
};

export default ModifyModal;
