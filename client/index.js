import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import Diff from './Diff.jsx';

render(
  // <p>this is from index in client</p>,
  // <BrowserRouter>
    <App />,
    // <Diff />,
  // </BrowserRouter>,
  document.getElementById('root')
);