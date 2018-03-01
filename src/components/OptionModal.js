/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 02:23:18 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 02:38:55
 */

import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected option"
      onRequestClose={props.handleClearSelectedOption}
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
  );
};

//Export
export default OptionModal;
