/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Modal, ModalProps } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../utils/CommonVariables';

type Props = ModalProps
const NewPlaceModal: React.FunctionComponent<Props> = ({ open, onClose }) => {
	const { handleSubmit, register } = useForm();
	const [results, setResults] = useState<any[]>([]); // state for search results
	const [clickedResult, setClickedResult] = useState<number>(-1);
	const onSearchSubmit = async ({ query }: any) => {
		try {
			const result = await axios.get(`${API_URL}/search?keyword=${query}`);
			console.log(result.data);
			setResults(result.data.documents);
		} catch (err) {
			console.log(err); // todo
		}
	};
	const handleClickResult = (idx: number) => async () => {
		try {
			const { place_name, address_name, road_address_name, x, y, phone, category_name, place_url } = results[idx];
			const result = await axios.post(`${API_URL}/place`, {
				name: place_name,
				category: category_name,
				location: address_name,
				roadLocation: road_address_name,
				x,
				y,
				phone,
				place_url,
			});
			if (result.data) {
				alert(result.data);
			}
			// TODO : 등록한 후 처리
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Modal
			open={open}
			onClose={onClose}
		>
			<div className="new_place_modal">
				<form onSubmit={handleSubmit(onSearchSubmit)}>
					<input required name="query" type="text" ref={register} placeholder="장소검색" />
					<button type="submit">검색</button>
				</form>
				<div className="search_results">
					{results.map((place, idx) => (
						<div key={place.id} className="column" onClick={() => setClickedResult(idx)}>
							<div>{place.place_name}</div>
							<div>{place.road_address_name}</div>
							{clickedResult === idx && <div onClick={handleClickResult(idx)}>누르면 추가</div>}
						</div>
					))}
				</div>
			</div>
		</Modal>
	);
};

export default NewPlaceModal;
