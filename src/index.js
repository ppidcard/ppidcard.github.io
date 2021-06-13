import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from './Component/Main.js';
import './Styles/stylesheet.css';



ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));