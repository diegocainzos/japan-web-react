export default function KanaCard({ selectedRow,character, romaji, dic }) {
    
    const handleSelectedRow = () => {
        selectedRow((prev) =>
            prev.includes(dic +'-'+ romaji)
                ? prev.filter((r) => r !==  dic +'-'+ romaji ) // Deselect if already selected
                : [...prev, dic +'-'+ romaji] // Add to selection
            );

    }
    return (
        <div>
            <input type="checkbox" id={character} className="hidden peer" />
            <label htmlFor={character} onClick={handleSelectedRow} className="peer-checked:bg-blue-400 peer-checked:border-gray-100 bg-gray-100 border-blue-400 border-2 w-[120px] h-[40px] flex items-center justify-center rounded cursor-pointer" >
                <h1 className="text-xl p-0">{character}/ {romaji}</h1>
            </label>
        </div>
    );
  }