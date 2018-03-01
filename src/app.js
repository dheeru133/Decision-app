/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 22:57:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 03:06:24
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Decision from './components/Decision';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = () => {
  return (
    <div>
      <p>hello</p>
      <p>Footer</p>
    </div>
  );
};

//Rendering
ReactDOM.render(<Decision />, document.getElementById('app'));
