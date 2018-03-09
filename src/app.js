/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 22:57:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-08 11:47:59
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Decision from './components/Decision';
import 'normalize.css/normalize.css';
import { app } from './styles/styles.scss';

const Layout = () => {
  return (
    <div id={app}>
      <p>hello</p>
      <p>Footer</p>
    </div>
  );
};

//Rendering
ReactDOM.render(<Decision />, document.getElementById('app'));
