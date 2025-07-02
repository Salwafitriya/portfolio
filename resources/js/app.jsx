// resources/js/app.jsx
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './pages/App';
// import '../css/app.css';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './pages/App';
import '../css/app.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)