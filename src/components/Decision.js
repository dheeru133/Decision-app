/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 00:30:12 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 02:37:39
 */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class Decision extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    // alert(option);
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already defined!!';
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  };

  //   handleDeleteOptions() {
  //     this.setState(() => {
  //       return {
  //         options: []
  //       };
  //     });
  //   }

  //Life cycle method:--------------------------
  componentDidMount() {
    try {
      console.log('Fetching Data');
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`Previous Props ${prevProps.defaultProps}`);
    // console.log(`Previous State ${prevState.options}`);
    // console.log('After State updated');
    if (prevState.options.length !== this.state.options.length) {
      console.log('Saving Data');
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Component will un mount');
  }
  //Life cycle method:------------------------

  render() {
    const subTitle = 'Let Computer decide your Action...!!';
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

Decision.defaultProps = {
  options: [],
  defaultProps: 'Default Decision props'
};

//Export
export default Decision;
