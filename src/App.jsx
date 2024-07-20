import { useState, useContext } from 'react'
import './App.css'
import Avatar from './component/avata'
import FormLogin from './component/LoginForm'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Header from './component/Header'
import TodoList from './pages/TudoList'
import { AuthContext } from './contexts/AuthContext.jsx'
import GioHang from './pages/GioHang.jsx'

import { Route, Routes, } from 'react-router-dom';

function App() {

  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/gio-hang' element={<GioHang />} />
        <Route path='/login' element={<FormLogin />} />
      </Routes>

    </>
  )
}

export default App;
