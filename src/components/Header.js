/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:25:17 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 00:28:06
 */
import React from 'react';

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Profile Decision'
};

//Export
export default Header;
