import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Movies from './components/movies'

ReactDOM.render(
  <main className="container">
    <Movies />
  </main>,
  document.getElementById('root')
);