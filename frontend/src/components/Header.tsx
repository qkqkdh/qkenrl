// Header Component
import './css/_header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}
const Header: React.FunctionComponent<Props> = ({}) => {
  return (
    <>
      <div className="header">
          <h1 className="logo">PIT PET</h1>
          <div className="nav">
              <Link to="/pets">마이펫</Link>
              <Link to="/search">검색</Link>
          </div>
      </div>
    </>
  )
}

export default Header;