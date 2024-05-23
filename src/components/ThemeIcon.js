import React,{useContext} from 'react'
import { MoonIcon } from '@heroicons/react/24/solid';
import ThemeContext from '../context/ThemeContext';

const ThemeIcon = () => {
  const{darkMode,setDarkMode}=useContext(ThemeContext);
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
  };
  
  return (
    <div>
        <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xlright-32 shadow-lg ${darkMode ? "shadow-grey-800": null}`} 
        onClick={toggleDarkMode}>
            <MoonIcon className={`h-6 w-6 cursor-ponter stroke-1 fill-none  stroke-neutral-400 ${darkMode ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-neutral-400"}`} />
        </button>
    </div>
  )
}

export default ThemeIcon