import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header text="I love you 3000" />
  </React.StrictMode>
);