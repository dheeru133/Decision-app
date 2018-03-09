/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:25:17 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 13:56:18
 */
import React from 'react';

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subTitle && (
          <h2 className="header__subtitle">{props.subTitle}</h2>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Profile Decision'
};

//Export
export default Header;
