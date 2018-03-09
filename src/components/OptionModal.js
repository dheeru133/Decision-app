/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 02:23:18 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 17:06:15
 */

import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected option"
      onRequestClose={props.handleClearSelectedOption}
      closeTimeoutMS={1000}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleClearSelectedOption}>
        Okay
      </button>
    </Modal>
  );
};

//Export
export default OptionModal;
