export default function KanaCard({ selectedRow,character, romaji, dic }) {
    
    const handleSelectedRow = () => {
        selectedRow((prev) =>
            prev.includes(dic +'-'+ romaji)
                ? prev.filter((r) => r !==  dic +'-'+ romaji ) // Deselect if already selected
                : [...prev, dic +'-'+ romaji] // Add to selection
            );

    }
    return (
        <div className="w-full">
            <input type="checkbox" id={character} className="hidden peer" />
            <label htmlFor={character} onClick={handleSelectedRow} className="kana-card peer-checked:border-black peer-checked:text-white peer-checked:bg-blue-400 peer-checked:border-gray-100 bg-gray-100 border-blue-400 border-2  flex  justify-center rounded cursor-pointer" >
                <h1 className="text-xl p-0">{character}/ {romaji}</h1>
            </label>
        </div>
    );
  }