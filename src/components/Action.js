/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:26:14 
 * @Last Modified by:   Dheeraj.Chaudhary@contractor.hallmark.com 
 * @Last Modified time: 2018-03-01 00:26:14 
 */
import React from 'react';

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What can I Do..?
      </button>
    </div>
  );
};

//Export
export default Action;
