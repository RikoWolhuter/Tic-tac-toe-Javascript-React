import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import './styles.css';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
