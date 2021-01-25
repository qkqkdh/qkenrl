import React from 'react';

interface Props {
  result: any; // TODO : Type Definition
}

/*
 1. result에 따라 분기
   - result === null : 검색어 추천 
   - result 정상 : 검색 결과
   - result X : 검색 결과가 없습니다.
*/
const SearchContent: React.FunctionComponent<Props> = ({result}) => {
  return (
    <div></div>
  )
}

export default SearchContent;