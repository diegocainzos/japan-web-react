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
    const katakana2 = [
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
    const hiragana2 = [
        { character: "が", romaji: "g"},
        { character: "ざ", romaji: "z"},
        { character: "だ", romaji: "d"},
        { character: "ば", romaji: "b"},
        { character: "ぱ", romaji: "p"},
        { character: 'ゔ', romaji: 'v'},
    ];

 
    const toggleAllKata = () => {
        // If any katakana is selected, uncheck all; otherwise, check all
        const checkboxes = document.querySelectorAll('.kata-checkbox input');
        const allKatakana = [...katakana, ...katakana2];
        const allSelected = selectedRows.filter(row => row.startsWith('kata-')).length === allKatakana.length;
        setSelectedRows(allSelected ? selectedRows.filter(row => !row.startsWith('kata-')) : [...selectedRows, ...allKatakana.map((k) => 'kata-'+ k.romaji)]);
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !allSelected;
        });
    };

    const toggleAllHira = () => {
        // If any hiragana is selected, uncheck all; otherwise, check all
        const checkboxes = document.querySelectorAll('.hira-checkbox input');
        const allHiragana = [...hiragana, ...hiragana2];
        const allSelected = selectedRows.filter(row => row.startsWith('hira-')).length === allHiragana.length;
        setSelectedRows(allSelected ? selectedRows.filter(row => !row.startsWith('hira-')) : [...selectedRows, ...allHiragana.map((k) => 'hira-'+ k.romaji)]);
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !allSelected;
        });
    }

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
        <form onSubmit={onSubmit} className='m-10 flex-col' action="">
            <div className="flex gap-x-7 justify-center">
                <div  className="flex flex-col space-y-3 hira-checkbox">
                    {hiragana.map((hira) => (
                        <KanaCard dic='hira' selectedRow={setSelectedRows} character={hira.character} romaji={hira.romaji} />
                    ))}              
                </div>
                <div  className="flex flex-col space-y-3 kata-checkbox">
                    {katakana.map((kana) => (
                        <KanaCard  dic='kata' selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                    ))}
                  
                </div>
                <div  className="flex flex-col space-y-3 hira-checkbox">
                    {hiragana2.map((kana) => (
                        <KanaCard dic='hira' selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                    ))}
                </div>
                <div className="flex flex-col space-y-3 kata-checkbox">
                    {katakana2.map((kana) => (
                        <KanaCard  dic='kata' selectedRow={setSelectedRows} character={kana.character} romaji={kana.romaji} />
                    ))}
                  
                </div>
           </div>
           <div className="flex flex-col  space-y-5 mt-4 w-[600px]">
                <button type="button" className="rounded-lg border-2 border-blue-500 bg-white text-blue-800 py-2"  onClick={toggleAllHira}>Select all hiragana</button>
                <button type="button" className="rounded-lg border-2 border-blue-500 bg-white text-blue-800 py-2" onClick={toggleAllKata}>Select all katakana</button>
                
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Quiz</button>
           </div>
        </form>
        </>
    );
}