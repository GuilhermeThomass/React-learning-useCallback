import { memo } from "react"

interface SearchProps{
    onChange: (text: string) => void;
}

function Search({ onChange } : SearchProps){
    console.log("Search render")
    return(
        <>
            <input
            type="text"
            placeholder="Escreva um nome..."
            onChange={(e)=> onChange(e.target.value)}
            />
        </>
    );
}

export default memo(Search);