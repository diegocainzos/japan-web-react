import { useState } from 'react';
import Form from './Form';
import Quiz from './Quiz';
import katakana from './katakana_v2.json'; // Import the JSON data

export default function QuizController() {

    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [formData, setFormData] = useState(null);
    const [dictionary, setDictionary] = useState({});

    function generateKatakanaDictionary(filas) {
        let result = {};
    
        // Iteramos sobre las filas seleccionadas
        filas.forEach(fila => {


            // Si la fila existe en el hiraganaMap, añadimos sus claves y valores al resultado

            if (katakana[fila]) {
                Object.keys(katakana[fila]).forEach(symbol => {
                    result[symbol] = katakana[fila][symbol];
                });
            }
        });
        console.log('result ',result);
        return result;
    }    
    // Función que recibe los datos del formulario desde el hijo
    const handleFormSubmit = (data) => {
        setFormData(data); // Guarda los datos en el estado del padre
        setDictionary(generateKatakanaDictionary(data));
        console.log('data ',dictionary);

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100 p-4">
            
            {!formData ? <Form handleSubmit={handleFormSubmit} /> : <Quiz dictionary={dictionary} />}


        </div>
    );
}