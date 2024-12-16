import logo from './logo.svg';
import './App.css';
import hiragana from './hiragana.json'; // Import the JSON data
import katakana from './katakana.json'; // Import the JSON data
import Quiz from './Quiz';
import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Dictionary';
import QuizController from './QuizController';
import KanaCard from './KanaCard';
import Form from './Form';



function App() {
  return (

    <BrowserRouter>
    <nav className='flex justify-around py-2 bg-lime-500'>
        <a href="/">Home</a>
        <a href="/hiragana">Hiragana</a>
        <a href="/katakana">Katakana</a>
        <a href='/dictionary'>Dictionary</a>
    </nav>
    <Routes>
        <Route path="/" element={<QuizController/>} />
        <Route path="/katakana" element={<Quiz dictionary={katakana}/>} />
        <Route path="/hiragana" element={<Quiz dictionary={hiragana}/>} />
        <Route path="/dictionary" element={<Dictionary/>} />
    </Routes>
</BrowserRouter>

 
  );
}

export default App;
