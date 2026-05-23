import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import Login from './pages/Login'
import { userState } from './store/atom'
import { useRecoilState } from 'recoil'
import AddBookPage from './pages/AddBookPage'
function App() {
  const [user, setUser] = useRecoilState(userState)
  return (
    <>
      <nav className='navbar'>
        <h1>Sách</h1>
        <div className='navbar-menu'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/book'>Sách</NavLink>
          <NavLink to='/add'>Thêm Sách</NavLink>
          {!user ? (
            <NavLink to='/login'>Đăng nhập</NavLink>
          ) : (
            <span className='user-info'>
              Xin chào, {user.username}
              <button className='logout-btn' onClick={() => setUser(null)}>
                Đăng xuất
              </button>
            </span>
          )}
        </div>
      </nav>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/book' element={<BookList></BookList>}></Route>
          <Route path='/add' element={<AddBookPage></AddBookPage>}></Route>
          <Route path='/book/:id' element={<BookDetail></BookDetail>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

        </Routes>
      </div>

    </>
  )
}

export default App
