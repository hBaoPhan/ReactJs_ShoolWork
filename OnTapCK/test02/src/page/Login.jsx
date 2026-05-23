import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../store/atom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [user,setUser]=useRecoilState(userState)
  let navigate=useNavigate()
  let [savedUser,setSavedUser]=useLocalStorage('user')

  let handleLogin=(e)=>{
    e.preventDefault()
    if(username==='admin'&& password==='123'){
        let userObj={username:username}
        setUser(userObj)
        setSavedUser(userObj)
        navigate('/')
    }
  }


  return (
    <div className="card">
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="">username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="">password</label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Đăng nhập</button>
        <p>admin/123</p>
      </form>
    </div>
  );
};

export default Login;
