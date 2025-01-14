export default function AnswerHistory({ history }) {
    return (
        <div>
            <h2>Historial de Respuestas:</h2>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>
                        {entry.hiragana} -{' '}
                        {entry.correct ? 'Correcta' : 'Incorrecta\n'}
                        {entry.time} - {'segundos'}
                    </li>
                ))}
            </ul>
        </div>
    );
}
