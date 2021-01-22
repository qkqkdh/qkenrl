import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import SearchForm from '../components/SearchForm';


const DATA_EXAMPLE: any = {
  '사과': {
    
  }
}

const Search: React.FunctionComponent = () => {
  const [result, setResult] = useState<any>(null); // state for Search Results TODO: Type Defintion
  const {register, handleSubmit} = useForm();
  
  const onSubmit = useCallback((data) => { // TODO : API CALL
    /*
    try {
      const result = axios.get(`/api/search?query=${data.query}`);
    } catch(err) {

    }
    */
    setResult(DATA_EXAMPLE[data.query] ? DATA_EXAMPLE[data.query] : "검색 결과가 없습니다.");
    
  },[])


  return (
    <Layout>
      <SearchForm Ref={register} onSubmit={handleSubmit(onSubmit)} />
      {result ? <></> : <></>}
    </Layout>
  )
}

export default Search;
