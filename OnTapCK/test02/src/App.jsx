import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Product from "./components/Product";
import { useRecoilState } from "recoil";
import { userState } from "./store/atom";
import AddProduct from "./page/AddProduct";
import Login from "./page/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetail from "./page/ProductDetail";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [count, setCount] = useState(0);
  let [user, setUser] = useRecoilState(userState);
 

  return (
    <div>
      <nav className="nav-bar">
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/cart">Giỏ hàng</NavLink>
        <NavLink to="/add">Thêm sàn phẩm</NavLink>
        {!user ? (
          <NavLink to="/login">Đăng nhập</NavLink>
        ) : (
          <div style={{ display: "flex" }}>
            <p>XIn chào: {user.username}</p>{" "}
            <button
              onClick={() => {
                setUser(null);
              }}
            >
              Đăng xuất
            </button>
          </div>
        )}
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart></Cart>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddProduct></AddProduct>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
