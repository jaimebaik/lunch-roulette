import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  // <p>this is from index in client</p>,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);