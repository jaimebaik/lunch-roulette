import React from 'react';
import { render } from 'react-dom';

import styles from './scss/styles.css';

render(
  <p>this is from index in client</p>,
  document.getElementById('app'),
);