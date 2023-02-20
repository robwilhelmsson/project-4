
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import { IUser } from './interface/users'
import "./styles/style.css"


function App() {
    
    const [user, setUser] = useState<null | IUser>(null)

    async function fetchUser() {
        const token = localStorage.getItem('token')
        const { data } = await axios.get(`api/users`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        setUser(data)
    }

    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn fetchUser={fetchUser} />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )


}
export default App
