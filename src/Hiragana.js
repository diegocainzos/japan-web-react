import { useState, useEffect } from 'react';
import hiragana from './hiragana.json'; // Import the JSON data
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hiragana() {
    const [rights, setRights] = useState(0);
    const [errors, setErrors] = useState(0);
    const [userAnswer, setUserAnswer] = useState(''); // Add state for the user input
    const hiraganaKeys = Object.keys(hiragana);
    const [index, setIndex] = useState(Math.floor(Math.random() * hiraganaKeys.length));
    const currentHiragana = hiraganaKeys[index]; // Get the current Hiragana character
    const currentRomaji = hiragana[currentHiragana]; // Get the corresponding Romanized value

    function newIndex() {
        let newIdx;
        do {
            newIdx = Math.floor(Math.random() * hiraganaKeys.length);
        } while (newIdx === index); // Ensure a different index
        setIndex(newIdx);
    }

    function check(e) {
        e.preventDefault(); // Prevent the form submission
        if (userAnswer === currentRomaji) {
            console.log('Correct!');
            setRights(rights + 1);
        } else {
            console.log('Incorrect');
            setErrors(errors + 1);
        }

        setUserAnswer(''); // Clear the input by resetting the state
        newIndex(); // Show a new Hiragana character
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-6xl font-bold mb-4">{currentHiragana}</h1>
            <form onSubmit={check} className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        name="answer"
                        placeholder="Enter Romaji"
                        value={userAnswer} // Bind the input value to state
                        onChange={(e) => setUserAnswer(e.target.value)} // Update the state on input change
                    />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Check
                    </button>
                </div>
            </form>
            <div className="mt-4">
                <h2 className="text-xl">
                    Errors: <span className="text-red-500">{errors}</span>
                </h2>
                <h2 className="text-xl">
                    Rights: <span className="text-green-500">{rights}</span>
                </h2>
            </div>
        </div>
    );
}
