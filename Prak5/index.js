import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from './catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container py-3'>
      <h2 className='pb-2 mb-4 border-bottom'>Our Books</h2>
      <Catalog />
    </div>
  </React.StrictMode>
);
