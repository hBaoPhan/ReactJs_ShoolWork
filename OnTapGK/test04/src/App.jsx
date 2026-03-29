import { useState } from 'react'
import './App.css'
import { useFetch } from './useFecth.js'
import inputData from '../public/data.json'
import { useMemo } from 'react'
import TodoList from './components/TodoList.jsx'
import SearchBar from './components/SearchBar.jsx'
import { useRef } from 'react'
import { useEffect } from 'react'
import ComboBox from './components/ComboBox.jsx'
import { useCallback } from 'react'
import Header from './components/Header.jsx'

function App() {
  let { data, loading, error } = useFetch(inputData)
  let [searchQuery, setSearch] = useState('')
  let [filter, setFilter] = useState('All')
  let inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  let handleSearch = useCallback((search) => {
    setSearch(search)
  })

  let handleFilter = useCallback((filter) => {
    setFilter(filter)
  })

  let displayedData = useMemo(() => {
    return data.filter((product) => {
      let matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      let matchesFilter = filter === "All" || product.category.includes(filter)
      return matchesSearch && matchesFilter
    })
  }, [data, searchQuery, filter])


  return (
    <div>
      <Header handleFilter={handleFilter} handleSearch={handleSearch} inputRef={inputRef}></Header>
      <TodoList data={displayedData} loading={loading} error={error}></TodoList>
    </div>
  )
}

export default App
