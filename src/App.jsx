import { useState } from 'react'
import './App.css'
import Avatar from './component/avata'
import FormLogin from './component/LoginForm'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Header from './component/Header'
import TodoList from './pages/TudoList'

import { Route, Routes, } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const [user, setUser] = useState({
    name: 'Linh',
    age: 21
  });

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const updateUserName = () => {

    setUser({
      ...user, name: 'NVTLinh'
    })
  }
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>

    </>
  )
}

export default App;
