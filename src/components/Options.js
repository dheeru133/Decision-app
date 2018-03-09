/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:24:17 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 16:29:37
 */

import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please Add Item to get started</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

//Export
export default Options;
