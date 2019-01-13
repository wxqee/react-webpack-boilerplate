import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import './main.scss';

ReactDOM.render(
  <Button variant="contained" color="primary" onClick={() => alert('Wow, it works!')}>
    Hello World
  </Button>,
  document.getElementById('root')
);
