import React, { useState } from "react";
import { Button, Modal } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Place } from "../utils/types";
import NewPlaceModal from './NewPlaceModal';

interface Props {
	handleSearchResult: (place: Place[]) => void;
}

const SearchBar: React.FunctionComponent<Props> = (props) => {
	const { handleSubmit, register } = useForm();
	const [results, setResults] = useState<Place[] | null>(null);
	const [toggle, setToggle] = useState<boolean>(false); // state for popup
	const handleFormSubmit = async (data: any) => {
		try {
			const result = await axios.get(`http://localhost:3001/place?keyword=${data.query}`);
			props.handleSearchResult(result.data); // map 에 marker 셋팅
			setResults(result.data); // 검색결과 표시 ?
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="search_bar">
			<div className="search">
				<div className="">
					SB
				</div>
				<form onSubmit={handleSubmit(handleFormSubmit)} className="search_form">
					<input
						required
						name="query"
						placeholder="반려견 동반 가능 장소 검색"
						ref={register}
					/>
					<Button type="submit">검색</Button>
				</form>
			</div>
			{results &&
			<div className="search_result">
				<div>
					<button type="button" onClick={() => setToggle(true)}>새장소 추가</button>
				</div>
				{results.map((place) => (
					<div>
						{place.name}
					</div>
				))}
			</div>}
			<NewPlaceModal
				open={toggle}
				onClose={() => setToggle(false)}
			>
				<p>test</p>
			</NewPlaceModal>
		</div>
	);
};

export default SearchBar;
