import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';
import Home from './Home';
import { useState } from 'react';

import hiragana from './hiragana.json'; // Import the JSON data
import katakana from './katakana.json'; // Import the JSON data
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Dictionary';
import Form from './Form';

function App() {
  const [dictionary, setDictionary] = useState(hiragana)
  const [showQuiz, setShowQuiz] = useState(true)
  const handleDictionary = (data) => {setDictionary(data); setShowQuiz(true)}
  
return (
  <>
    {/* form */}
    {!showQuiz && <Form sendDictionary={handleDictionary}></Form>}
    <p>{dictionary}</p>
    {<Quiz dictionary={dictionary} />
    {/* <Quiz dictionary={katakana}></Quiz> */}
  </>
);
}

export default App;
