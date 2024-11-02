import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () =>{
    const [query, setQuery] = useState('');

    const handleSearch = (e) =>{
        e.preventDefault();
    };

    return(
    <>
        <form onSubmit={handleSearch} className='flex items-center'>
            <input type="text" value={query} onChange={ (e) => setQuery(e.target.value)} placeholder='Search...' className='p-2 border border-gray-300 rounded-l' />
        </form>
    </>
    );
};

export default SearchBar;