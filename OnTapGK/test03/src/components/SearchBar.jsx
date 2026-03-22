import React from 'react'

const SearchBar = ({ onChange, inputRef }) => {
    return (
        <div>
            <input ref={inputRef} type="text" name="" id="" placeholder='Search' onChange={(e) => { onChange(e.target.value) }} />
        </div>
    )
}

export default SearchBar