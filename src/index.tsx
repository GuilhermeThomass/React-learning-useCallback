import { useCallback, useState } from "react";
import { shuffle } from "./utils/shuffle.tsx";
import Search from "./Search";

const allUsers = [
    "Ana",
    "Bruno", 
    "Carlos", 
    "Daniela", 
    "Eduardo", 
    "Fernanda", 
    "Gabriel", 
    "Helena", 
    "Isabela", 
    "João"
];

interface DemoProps{}

export default function Demo({} : DemoProps) {
    const [users,setUsers] = useState(allUsers);
    
    const handleSearch = useCallback((text : string ) => {
        const filtered = allUsers.filter((users)=> users.includes(text),
        );
        setUsers(filtered);
    },[])

    return(
        <div>
            <div>
                <button onClick={()=> setUsers(shuffle(allUsers))}>
                    Re-organizar
                </button>
                <Search onChange={handleSearch}/>
            </div>
            <ul>
                {users.map((users) =>(
                    <li key={users}>{users}</li>
                ))}
            </ul>
        </div>
    )
}
