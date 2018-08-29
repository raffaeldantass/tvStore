import React from 'react';
import ReactDOM from 'react-dom';
import Store from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Store />
  </BrowserRouter>
	,document.getElementById('root')
);