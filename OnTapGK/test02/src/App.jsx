import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ComboBox from './components/ComboBox'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import inputData from '../data.json'
import { fetchData } from './fetch.js'

function App() {
  let [data, setData] = useState([])
  let [searchQuery, setSearchQuery] = useState("")
  let [statusFilter, setStatusFilter] = useState("All")

  useEffect(() => {
    setData(fetchData())
  }, []);

  let handleChange = (filter) => {
    setStatusFilter(filter)
  }

  let handleSearch = (search) => {
    setSearchQuery(search)
  }

  let displayedData = data.filter((todo) => {
    let matchesSearch = todo.name.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesStatus = statusFilter === "All" || todo.status.toLowerCase().includes(statusFilter.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='App'>
      <SearchBar onChange={handleSearch}></SearchBar>
      <ComboBox onChange={handleChange}></ComboBox>
      <TodoList data={displayedData}></TodoList>
    </div>

  )
}

export default App
