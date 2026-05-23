import React from 'react'
import ProductList from '../components/ProductList'
import { searchTerm,filterState, userState } from '../store/atom'
import { useRecoilState } from 'recoil'
import SearchBar from '../components/SearchBar'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useEffect } from 'react'

const Home = () => {   
    let [search,setSearch]=useRecoilState(searchTerm)
    let [filter,setFiler]=useRecoilState(filterState)
    let [user,setUser]=useRecoilState(userState)
     let [savedUser, setSavedUser] = useLocalStorage('user')

  useEffect(() => {
    if (savedUser) {
      setUser(savedUser);
    }
  },[]);

    let handleSearch=(e)=>{
        setSearch(e.target.value)
        
    }
    let handleFilter=(e)=>{
        setFiler(e.target.value)
    }

   
  return (
    <div>
        <div className='search-filter'>
             <SearchBar onChange={handleSearch}></SearchBar>
             <select onChange={(e)=>handleFilter(e)}>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
             </select>

        </div>
       

        <ProductList filter={filter} search={search}></ProductList>
      
    </div>
  )
}

export default Home
