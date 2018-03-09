/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:26:14 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 14:09:13
 */
import React from 'react';

const Action = props => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I Do..?
      </button>
    </div>
  );
};

//Export
export default Action;
