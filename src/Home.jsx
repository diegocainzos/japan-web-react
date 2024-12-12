import CharacterCard from './CharacterCard';
import hiragana from './hiragana.json'
export default function Home(){
    const dictionaryKeys = Object.keys(hiragana)
    console.log(dictionaryKeys)
    return(
        <div className="flex justify-center flex-col items-center py-4 bg-purple-200 min-h-screen">
            <h1>Welcome to JPL</h1>
            <div>
                <button>Practice Hiragana</button>
                <button>Practice Katakana</button>
            </div>
        </div>
    );
}