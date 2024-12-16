import { useEffect, useState } from "react";
import KanaCard from "./KanaCard";

export default function Form({handleSubmit}) {

    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {console.log('cambio'); console.log(selectedRows)}, [selectedRows]);
    const katakana = [
        { character: "ア", romaji: "a" },
        { character: "イ", romaji: "k" },
        { character: "ウ", romaji: "s" },
        { character: "エ", romaji: "t" },
        { character: "オ", romaji: "n" },
        { character: "カ", romaji: "h" },
        { character: "キ", romaji: "m" },
        { character: "ク", romaji: "y" },
        { character: "ケ", romaji: "r"},
    ];
    const hiragana = [
        { character: "あ", romaji: "a" },
        { character: "い", romaji: "k" },
        { character: "う", romaji: "s" },
        { character: "え", romaji: "t" },
        { character: "お", romaji: "n" },
        { character: "か", romaji: "h" },
        { character: "き", romaji: "m" },
        { character: "く", romaji: "y" },
        { character: "け", romaji: "r"},
    ];

 
    const toggleAllKata = () => {
        // If any katakana is selected, uncheck all; otherwise, check all
        const checkboxes = document.querySelectorAll('#kata-checkbox input');
        selectedRows.filter(row => row.startsWith('kata-')).length === katakana.length ? setSelectedRows(selectedRows.filter(row => !row.startsWith('kata-'))) : setSelectedRows([...selectedRows, ...katakana.map((k) => 'kata-'+ k.romaji)]);
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedRows.length !== katakana.length;
        });
    };

    const toggleAllHira = () => {
        // If any hiragana is selected, uncheck all; otherwise, check all
        const checkboxes = document.querySelectorAll('#hira-checkbox input');
        selectedRows.filter(row => row.startsWith('hira-')).length === hiragana.length ? setSelectedRows(selectedRows.filter(row => !row.startsWith('hira-'))) : setSelectedRows([...selectedRows, ...hiragana.map((k) => 'hira-'+ k.romaji)]);
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedRows.length !== hiragana.length;
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(selectedRows); // Llama a la función de callback con los datos
    };
    return (
        <>
        <h1 className="text-4xl font-bold mb-4">Select the kana you want to practice</h1>
        <form onSubmit={onSubmit} className='m-10' action="">
            <div className="flex gap-x-7">
                <div id='hira-checkbox' className="flex flex-col space-y-3">
                    {hiragana.map((kana) => (
                        <KanaCard dic='hira' selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                    ))}              
                </div>
                <div id="kata-checkbox" className="flex flex-col space-y-3">
                    {katakana.map((kana) => (
                        <KanaCard  dic='kata' selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                    ))}
                  
                </div>
           </div>
           <div className="flex flex-col items-center space-y-5 mt-4">
                <button type="button" className="rounded-lg border-2 border-blue-500 bg-white text-blue-800 p-4"  onClick={toggleAllHira}>Select all hiragana</button>
                <button type="button" onClick={toggleAllKata}>Select all katakana</button>
                
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Quiz</button>
           </div>
        </form>
        </>
    );
}