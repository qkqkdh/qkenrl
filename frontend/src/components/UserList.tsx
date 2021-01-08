import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
type Props = {

}

const UserList: React.FunctionComponent<Props> = ({children}) => {
  const [data, setData] = useState<any[]>([]);

  const handleClick = async () => {
    const response = await axios.get('/api/test');
    if(response.status === 200) {
      setData(response.data);
    }
  }
  return (
    <>
      <Button onClick={handleClick}>유저 목록 보기</Button>
      {
        data.map((val) => {
          return (
            <div key={val.username}>
              <Typography key={val.usrename} variant="h1">{val.username}</Typography>
            </div>
          )
        })}
    </>
  )
}

export default UserList;