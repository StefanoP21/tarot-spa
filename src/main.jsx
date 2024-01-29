import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { BrowserRouter } from 'react-router-dom';
import { TarotApp } from './TarotApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TarotApp />
    </BrowserRouter>
  </React.StrictMode>
);
