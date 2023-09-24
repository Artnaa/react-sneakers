import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import 'macro-css'
import Favorites from './pages/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
//  <Favorites/>
 
);
