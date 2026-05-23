import React from 'react'

const SearchBar = ({onChange}) => {
  return (
    <input type="text" onChange={(e)=>onChange(e)} />
  )
}

export default SearchBar
