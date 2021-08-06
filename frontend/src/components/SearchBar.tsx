import React, { useState } from "react";
import { Button, Modal, Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Place, PlaceInfo } from "../utils/types";
import NewPlaceModal from './NewPlaceModal';
import { usePlaceDispatch } from '../Model/PlaceModel';
import { API_URL } from "../utils/CommonVariables";

interface Props {
	handleSearchResult: (place: PlaceInfo[]) => void;
	handleSideBarOpen: () => void;
}

const SearchBar: React.FunctionComponent<Props> = ({ handleSearchResult, handleSideBarOpen }) => {
	const setPlaces = usePlaceDispatch();
	const { handleSubmit, register } = useForm();
	const [results, setResults] = useState<PlaceInfo[] | null>(null);
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
				{ /* 원래 SB 써있었는데 무슨 용도...?인지 모르겠어서 일단 흔적을 남김 */}
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
			{/* 희은 : result를 자동완성으로 표시할 필요없이 결과를 아래에 표시하는게 나을 것 같아서 없애버렸습니다! 있어도 되는데 결과창과 중복되어서 이상합니다! */}
			{/* {
				results &&
					<div className="search_result">
						<div>
							<button type="button" onClick={() => setToggle(true)}>새장소 추가</button>
						</div>
						{results.map((place) => (
							<div key={place._id} className="place-btn">
								{place.name}
							</div>
						))}
					</div>
			} */}
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
