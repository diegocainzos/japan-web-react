import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import hiragana from './hiragana.json'; // Import the JSON data
import katakana from './katakana.json'; // Import the JSON data

import Quiz from './Quiz';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Quiz dictionary={katakana}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
