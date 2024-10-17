import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeContext"

const useDarkMode = () => {
    const context = useContext(DarkModeContext);

    if(!context){
        throw new Error("useDarkMode must be used within a DarkModeProvaider");
    }
    return context;
}
export default useDarkMode;