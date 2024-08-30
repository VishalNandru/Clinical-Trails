// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './App.css'; 
import App from './components/App'; 

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

