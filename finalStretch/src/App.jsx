import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import BookListPage from './pages/BookListPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { userState } from './store/atoms.js'
import { useRecoilState } from 'recoil'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { useEffect } from 'react'



function App() {
  // TODO (Câu 9): Lấy thông tin user từ Recoil để hiển thị tên + nút Logout
  // TODO (Câu 10): Làm ProtectedRoute cho các trang cần đăng nhập

  let [currentUser, setCurrentUser] = useRecoilState(userState)

  useEffect(() => {
    let savedUser = localStorage.getItem("username")
    if (savedUser) {
      let parsed = JSON.parse(savedUser)
      if (parsed) {
        setCurrentUser(parsed)
      }
    }
  }, [])
  return (
    <>
      <nav className="navbar">
        <h1>📚 My Book Library</h1>
        <div>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/books">Danh sách sách</NavLink>
          <NavLink to="/add">Thêm sách</NavLink>
          {!currentUser ? (
            <NavLink to="/login">Đăng nhập</NavLink>
          ) : (
            <div className="navbar-user">
              <span>Xin chào, {currentUser.username}</span>
              <button
                onClick={() => {
                  setCurrentUser(null)
                  localStorage.removeItem('username')
                }}
                className="btn-logout"
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={
            <ProtectedRoute>
              <BookDetailPage />
            </ProtectedRoute>} />
          <Route path="/add" element={
            <ProtectedRoute>
              <AddBookPage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
