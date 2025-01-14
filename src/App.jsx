import './styles/App.css';
import hiragana from './assets/json/hiragana.json'; // Import the JSON data
import katakana from './assets/json//katakana.json'; // Import the JSON data
import Quiz from './features/Quiz/Quiz';
import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './features/Dictionary/Dictionary';
import QuizController from './features/Quiz/QuizController';
import KanaCard from './components/KanaCard';
import Form from './components/Form';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<QuizController/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
