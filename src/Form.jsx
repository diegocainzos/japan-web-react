import { useEffect, useState } from "react";
import KanaCard from "./KanaCard";

export default function Form({handleSubmit}) {

    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {console.log('cambio'); console.log(selectedRows)}, [selectedRows]);
    const katakana = [
        { character: "ア", romaji: "a" },
        { character: "カ", romaji: "k" },
        { character: "サ", romaji: "s" },
        { character: "タ", romaji: "t" },
        { character: "ナ", romaji: "n" },
        { character: "ハ", romaji: "h" },
        { character: "マ", romaji: "m" },
        { character: "ヤ", romaji: "y" },
        { character: "ラ", romaji: "r"},
        { character: "ワ", romaji: "w"},


    ];
    const kataDakuten = [
        { character: "ガ", romaji: "g"},
        { character: "ザ", romaji: "z"},
        { character: "ダ", romaji: "d"},
        { character: "バ", romaji: "b"},
        { character: "パ", romaji: "p"},
        { character: 'ヴ', romaji: 'v'},
    ];

    const hiragana = [
        { character: "あ", romaji: "a" },
        { character: "か", romaji: "k" },
        { character: "さ", romaji: "s" },
        { character: "た", romaji: "t" },
        { character: "な", romaji: "n" },
        { character: "は", romaji: "h" },
        { character: "ま", romaji: "m" },
        { character: "や", romaji: "y" },
        { character: "ら", romaji: "r"},
        { character: "わ", romaji: "w"},
       
    ];
    const hiraDakuten = [
        { character: "が", romaji: "g"},
        { character: "ざ", romaji: "z"},
        { character: "だ", romaji: "d"},
        { character: "ば", romaji: "b"},
        { character: "ぱ", romaji: "p"},
        { character: 'ゔ', romaji: 'v'},
    ];

 
    const toggleAllKata = () => {
        // Retrieve all katakana checkboxes and their corresponding rows
        const checkboxes = document.querySelectorAll('.kata-checkbox input');
        if (!checkboxes.length) return; // Ensure there are checkboxes to toggle
    
        const allKatakana = [...katakana, ...kataDakuten].map((k) => 'kata-' + k.romaji);
        const allSelected = selectedRows.filter(row => row.startsWith('kata-')).length === allKatakana.length;
    
        // Update selectedRows based on current selection state
        setSelectedRows(allSelected
            ? selectedRows.filter(row => !row.startsWith('kata-')) // Uncheck all
            : [...new Set([...selectedRows, ...allKatakana])] // Check all (ensure no duplicates)
        );
    
        // Update checkbox states
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !allSelected;
        });
    };
    

    const toggleAllHira = () => {
        // Retrieve all hiragana checkboxes and their corresponding rows
        const checkboxes = document.querySelectorAll('.hira-checkbox input');
        if (!checkboxes.length) return; // Ensure there are checkboxes to toggle
    
        const allHiragana = [...hiragana, ...hiraDakuten].map((k) => 'hira-' + k.romaji);
        const allSelected = selectedRows.filter(row => row.startsWith('hira-')).length === allHiragana.length;
     
        // Update selectedRows based on current selection state
        setSelectedRows(allSelected 
            ? selectedRows.filter(row => !row.startsWith('hira-')) // Uncheck all
            : [...new Set([...selectedRows, ...allHiragana])] // Check all (ensure no duplicates)
        );
    
        // Update checkbox states
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !allSelected;
        });
    };
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (selectedRows.length > 0) {
            handleSubmit(selectedRows); // Llama a la función de callback con los datos
        } else {
            alert("Please select at least one checkbox to start the quiz.");
        }
    };
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Select the kana you want to practice</h1>
            <form onSubmit={onSubmit} className='m-10 flex-col   kana-card' action="">
                <div className="flex kana-container gap-16 justify-center">
                    {[{ label: "HIRAGANA", data: hiragana, dic: 'hira' }, { label: "KATAKANA", data: katakana, dic: 'kata' }, { label: "DAKUTEN", data: hiraDakuten, dic: 'hira' }, { label: "DAKUTEN", data: kataDakuten, dic: 'kata' }].map((group, index) => (
                        <div key={index} className={`flex flex-col space-y-3 ${group.dic}-checkbox w-full items-center`}>
                            <label className="w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{group.label}</label>
                            {group.data.map((kana) => (
                                <KanaCard key={kana.romaji} dic={group.dic} selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col button-container space-y-5 mt-4 ">
                    <button type="button" className="rounded-lg border-2 border-blue-500 text-blue-800 py-2" onClick={toggleAllHira}>Select all hiragana</button>
                    <button type="button" className="rounded-lg border-2 border-blue-500 bg-white text-blue-800 py-2" onClick={toggleAllKata}>Select all katakana</button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Quiz</button>
                </div>
            </form>
        </>
    );
}