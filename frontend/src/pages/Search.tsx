import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
import { Layout, SearchForm, SearchContent } from "../components";

interface SearchResult {
	keyword: string;
	body: string; // TODO : 구체적으로
}

const DATA_EXAMPLE: SearchResult[] = [
	{
		keyword: "사과",
		body: "사과는영어로 APPLE"
	},
	{
		keyword: "아스파라거스",
		body: "아스파라거스는 영어로 dktmvkfkrjtm"
	},
	{
		keyword: "마라탕",
		body: "마라탕은 맛있다"
	},
	{
		keyword: "아메리카노",
		body: "ICE AMERICANO"
	}
];

const Search: React.FunctionComponent = () => {
	const [result, setResult] = useState<SearchResult | SearchResult[]>([]); // state for Search Results TODO: Type Defintion
	const [loading, setLoading] = useState<boolean>(true); // state for Loading Indicator
	const { register, handleSubmit } = useForm();

	const onSubmit = useCallback((data) => {
		// TODO : API CALL
		/*
    try {
      const result = axios.get(`/api/search?query=${data.query}`);
    } catch(err) {

    }
    */
		setResult(
			DATA_EXAMPLE.find((val, idx) => val.keyword === data.query) || []
		);
	}, []);

	useEffect(() => {
		// 검색어 추천 백엔드에서 받아서 result에 넣기
	}, []);

	return (
		<Layout>
			<SearchForm Ref={register} onSubmit={handleSubmit(onSubmit)} />
			{loading ? <CircularProgress /> : <SearchContent result={result} />}
		</Layout>
	);
};

export default Search;
