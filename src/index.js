import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './tailwind.css';   // has @tailwind base/components/utilities + @layer base
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
