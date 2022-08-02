import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
//import './index.css';
import 'normalize.css'
import { BrowserRouter, Routes,} from 'react-router-dom';
import {  Route } from 'react-router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
       <Routes>
          <Route path="/" element={<App />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);