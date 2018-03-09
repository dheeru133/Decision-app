/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:16:19 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 16:37:54
 */
import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState(() => ({ error: error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Add Option </button>
        </form>
      </div>
    );
  }
}

//Export
export default AddOption;
