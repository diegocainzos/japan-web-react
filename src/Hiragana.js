import { useState, useEffect } from 'react';
import hiragana from './hiragana.json'; // Import the JSON data
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerHistory from './AnswerHistory';
export default function Hiragana({}) {
    const [end, setEnd] = useState(false);
    const [rights, setRights] = useState(0);
    const [errors, setErrors] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [startTime, setStartTime] = useState(Date.now()); // Tiempo de inicio

    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the position in the shuffled array
    const [shuffledKeys] = useState(() =>   Object.keys(hiragana).sort(() => Math.random() - 0.5))
    // Get the current Hiragana and its romaji
    const currentHiragana = shuffledKeys[currentIndex];
    const currentRomaji = hiragana[currentHiragana];

    function check(e) {
        e.preventDefault();
        const isCorrect = userAnswer === currentRomaji;
        const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo en segundos

        if (isCorrect) {
            setRights((prev) => prev + 1);
        } else {
            setErrors((prev) => prev + 1);
        }

        setHistory((prev) => [...prev, {hiragana: currentHiragana, correct: isCorrect, time: elapsedTime},]);

        if (currentIndex < shuffledKeys.length - 1) {
            setCurrentIndex((prev) => prev + 1); // Move to the next character
            setStartTime(Date.now()); // Reinicia el tiempo para la nueva pregunta
        } else {
            setCurrentIndex(0)
            setEnd(true);
            alert('You’ve completed the session!'); // End condition
        }
        setUserAnswer(''); // Clear the input
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-4">
            {end ? (
                // Mostrar solo AnswerHistory si `end` es true
                <AnswerHistory history={history} />
            ) : (
                // Mostrar el resto del juego si `end` es false
                <>
                    <h1 className="text-6xl font-bold mb-4">{currentHiragana}</h1>
                    <form onSubmit={check} className="w-full max-w-sm">
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                name="answer"
                                placeholder="Enter Romaji"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
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
                </>
            )}
        </div>
    );
    
}
