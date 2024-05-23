import React, { useContext, useState } from 'react';
import { mockSearchResults } from "../constants/mock.js";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"; 
import SearchResults from './SearchResults';
import ThemeContext from '../context/ThemeContext.js';

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const {darkMode}=useContext(ThemeContext);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (mockSearchResults && mockSearchResults.result) {
      const filteredResults = mockSearchResults.result.filter(result =>
        result.description.toLowerCase().includes(value.toLowerCase())
      );
      setBestMatches(filteredResults);
    }
  };

  return (
    <div className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 
    ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}`}>
      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${darkMode ? "bg-gray-900" : null}`}
        placeholder="Search Stock..."
        onChange={handleInputChange}
      />
      {input && (
        <button onClick={clear} className='m-1'>
          <XMarkIcon className="h-4 w-4 text-gray-500" /> 
        </button>
      )}
      <button className='h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2'>
        <MagnifyingGlassIcon className='h-4 w-4 fill-gray-100' /> 
      </button>

      {input && bestMatches.length > 0 ? (<SearchResults results={bestMatches} />) : null}
    </div>
  );
};

export default Search;
