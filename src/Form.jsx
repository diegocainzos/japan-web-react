import Dictionary from "./Dictionary";

export default function Form({sendDictionary}){
    const handleClick = () => {
        sendDictionary('hiragana'); // Llama a la función pasada como prop
      };
    const handleKata = () => {
        sendDictionary('katakana'); // Llama a la función pasada como prop
      };
    
    return(
        <div>
            <form >
                <button onClick={handleClick}>All Hiragana</button>
                <button onClick={handleKata}>All Katakana</button>
            </form>
        </div>
    );
}