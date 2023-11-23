import React, { createContext, useReducer } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import Login from './Components/Login'
import Changeexpense from './Components/Changeexpense'
import ManageExpense from './Components/ManageExpense'
import Profile from './Components/Profile'
import Logout from './Components/Logout'
import Reset from './Components/Reset'
import { initialState, reducer } from './Reducer/UserReducer'
import Home from './Components/Home'
import AddExpense from './Components/AddExpense'
export const UserContext = createContext()
const Routnig = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Changeexpense" element={<Changeexpense />} />
        <Route path="/AddExpense" element={<AddExpense />} />
        <Route path="/ManageExpense" element={<ManageExpense />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Reset" element={<Reset />} />

      </Routes>
    </BrowserRouter>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }} >
      
        <Routnig />
      </UserContext.Provider>




    </>
  )
}

export default App
