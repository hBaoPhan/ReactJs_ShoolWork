import { useCallback, useRef, useState } from 'react'
import './App.css'
import { useEffect, useMemo } from 'react'
import { useFetch } from './useFetch.js'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import ComboBox from './components/ComboBox'
import inputData from '../data.json'

function App() {
  let [searchQuery, setSearchQuery] = useState('')
  let [filter, setFilter] = useState('All')
  let { data, error, loading } = useFetch(inputData)
  let inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

  }, [])

  let handleSearch = useCallback((search) => {
    setSearchQuery(search)
  })

  let handleFilter = useCallback((filter) => {
    setFilter(filter)
  })

  let displayedData = useMemo(() => {
    return data.filter((todo) => {
      let matchesSearch = todo.name.toLowerCase().includes(searchQuery.toLowerCase())
      let matchesFilter = filter === 'All' || todo.status.includes(filter)
      return matchesSearch && matchesFilter

    })
  }, [data, searchQuery, filter])

  return (
    <div className='App'>
      <SearchBar onChange={handleSearch} inputRef={inputRef}></SearchBar>
      <ComboBox onChange={handleFilter}></ComboBox>
      <TodoList data={displayedData} error={error} loading={loading}></TodoList>




    </div>
  )
}

export default App
