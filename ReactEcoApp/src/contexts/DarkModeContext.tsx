import { createContext, useState } from "react";
import { useEffect } from "react";


export interface DarkModeContextType {
    darkMode: boolean;
    toggle: () => void;
}
 const DarkModeContext = createContext<DarkModeContextType>(null);

function DarkModeProvaider({children}){
 useEffect(()=>{
const mode = localStorage.getItem("darkMode");
if(mode === "dark"){
    setDarkMode(true);
    document.body.classList.toggle("dark");
}
 }, [])

    const [darkMode, setDarkMode] = useState(false)

    function toggle(){
        const newMode = !darkMode ? "dark": "light";
        localStorage.setItem("darkMode", newMode )
        setDarkMode(prev => !prev);
        document.body.classList.toggle("dark");
    }
    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}
export { DarkModeProvaider, DarkModeContext };
