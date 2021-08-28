import React, { useState } from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { PlaceInfo } from "../utils/types";
import NewPlaceModal from './NewPlaceModal';
import { API_URL } from "../utils/CommonVariables";

interface Props {
	handleSearchResult: (place: PlaceInfo[]) => void;
	handleSideBarOpen: () => void;
}

const SearchBar: React.FunctionComponent<Props> = ({ handleSearchResult, handleSideBarOpen }) => {
	const { register } = useForm();
	const [toggle, setToggle] = useState<boolean>(false); // state for popup
	const handleFormSubmit = async (e: any) => {
		try {
			const keyword = e.target.value as string;
			if (keyword === "") {
				// todo : keyword 없어지면 위치로 api 호출
				return;
			}
			const result = await axios.get(`${API_URL}/place?keyword=${keyword}`);
			handleSearchResult(result.data); // map 에 marker 셋팅
			// setResults(result.data); // 자동완성 결과 표시
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="search_bar">
			<div className="search">
				<div className="" />
				<div className="search_form">
					<MenuIcon id="btn-menu" onClick={handleSideBarOpen} />
					<input
						required
						name="query"
						placeholder="반려견 동반 가능 장소 검색"
						ref={register}
						onChange={handleFormSubmit}
					/>
					<Button id="btn-submit" type="submit">검색</Button>
				</div>
			</div>
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
