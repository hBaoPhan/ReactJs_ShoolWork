import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from './store/atoms'
import HomePage from './pages/HomePage.jsx'
import BookListPage from './pages/BookListPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

// TODO (Câu 10): Làm ProtectedRoute cho các trang cần đăng nhập
function ProtectedRoute({ children }) {
  const [user] = useRecoilState(userState)
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

function App() {
  // TODO (Câu 9): Lấy thông tin user từ Recoil để hiển thị tên + nút Logout
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    // Khôi phục user từ localStorage nếu có
    const savedUser = window.localStorage.getItem('user')
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser)
        if (parsed) setUser(parsed)
      } catch (err) {
        console.error(err)
      }
    }
  }, [setUser])

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
  }

  return (
    <>
      <nav className="navbar">
        <h1>📚 My Book Library</h1>
        <div>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/books">Danh sách sách</NavLink>
          <NavLink to="/add">Thêm sách</NavLink>
          {!user ? (
            <NavLink to="/login">Đăng nhập</NavLink>
          ) : (
            <>
              <span style={{ marginLeft: 16, marginRight: 16 }}>Xin chào, {user.username}</span>
              <button onClick={handleLogout} className="btn btn-warning" style={{ padding: '4px 8px' }}>Logout</button>
            </>
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
            </ProtectedRoute>
          } />
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
