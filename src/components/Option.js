/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:21:09 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 16:30:30
 */

import React from 'react';

const Option = props => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button--link"
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

//Export
export default Option;
