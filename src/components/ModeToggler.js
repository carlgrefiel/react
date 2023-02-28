import { useState } from "react";

export default function ModeToggler() {
    const [darkMode, setDarkMode] = useState("Dark Mode is On");
    let darkModeOn = true;
    
    const handleClick = (e) => {
        e.preventDefault();
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            setDarkMode("Dark Mode is On");
            console.log("Dark Mode is On")
        }else {
            setDarkMode("Light Mode is On");
            console.log("Light Mode is On")
        }
    }
return (
    <div>
        <h1>{darkMode}</h1>
        <button onClick={handleClick}>
            Click Me 
        </button>
    </div>
)

};
