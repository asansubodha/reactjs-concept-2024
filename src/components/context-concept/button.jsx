import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextButtonComponent(){

    const {handleChangeThemeOnButtonClick} = useContext(GlobalContext);
    return (
        // <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
        // Change Theme</button>
        <button onClick={handleChangeThemeOnButtonClick}>
        Change Theme</button>
        );
}

export default ContextButtonComponent;