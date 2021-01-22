import React from 'react';
import { TextField, Button } from '@material-ui/core';

interface Props { // TODO : Type definition
 Ref: any;
 onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FunctionComponent<Props> = ({Ref, onSubmit}) => {
  
  return (
      <div className="search_form">
        <form onSubmit={onSubmit}>
          <TextField name="query" placeholder={"먹어도 되는지 궁금한 음식을 검색해보세요!"} inputRef={Ref}/>
          <Button type="submit">검색</Button>
        </form>
      </div>
  )
}

export default Search;
