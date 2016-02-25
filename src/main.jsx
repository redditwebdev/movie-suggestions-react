import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

import MovieModel from './model.jsx';
const model = new MovieModel();

ReactDOM.render(
  <App model={model} />,
  document.getElementById('app')
);
