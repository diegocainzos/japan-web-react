
export default function CharacterCard({charachter, romaji}) {

    return (
        <div
            className="flex flex-col items-center justify-center bg-blue-300  rounded-xl border-4 border-zinc-500 w-[150px] h-[140px]"
            >
            <h2>{charachter}</h2>
            <h2>{romaji}</h2>
        </div>

    );
}
