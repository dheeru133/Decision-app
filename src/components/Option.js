/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:21:09 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 00:21:56
 */

import React from 'react';

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
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
