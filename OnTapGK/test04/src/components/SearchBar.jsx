import React from 'react'

const SearchBar = ({ handleSearch, inputRef }) => {
    return (
        <input ref={inputRef} type="text" placeholder='Search' onChange={(e) => { handleSearch(e.target.value) }} />
    )
}

export default SearchBar