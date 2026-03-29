import React from 'react'
import SearchBar from './SearchBar'
import ComboBox from './ComboBox'

const Header = ({ handleFilter, handleSearch, inputRef }) => {
    return (
        <div>
            <SearchBar handleSearch={handleSearch} inputRef={inputRef}></SearchBar>
            <ComboBox handleFilter={handleFilter}></ComboBox>
        </div>


    )
}

export default Header