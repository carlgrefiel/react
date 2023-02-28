import { useState } from "react";


export default function LoopName() {

    const [petName, setPetName] = useState("Fluffy");
    
    function nameLooper() {
        if(petName === "Fluffy"){
            setPetName("Rexy");
        }else if(petName === "Rexy"){
            setPetName("Bruno");
        }else if(petName === "Bruno"){
            setPetName("Fluffy");
        }
    }

    return(
        <div>
            <h1>I'm Thinking to name my pet '{petName}'</h1>
            <button onClick={nameLooper}>Pick a name</button>
        </div>
    );
};