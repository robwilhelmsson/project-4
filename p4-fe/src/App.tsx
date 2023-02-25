
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios"

import { createTheme, ThemeProvider } from "@mui/material"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Thorts from "./pages/Thorts"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import { IUser } from './interface/users'

import "./styles/style.css"

const theme = createTheme({
    palette: {
        primary: {
            main: '#2c4e48'
        }
    },
    typography: {
        fontFamily: [
            'Bitter',
            'Raleway',
        ].join(',')
    }
})

// #e6c764 - yellow
// #2c5b53 - darker green (button)
// #537974 - green sky
// #e4f4f2 - white
function App() {

    const [user, setUser] = useState<null | IUser>(null)

    async function fetchUser() {
        const token = localStorage.getItem('token')
        const { data } = await axios.get(`api/users`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        setUser(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) fetchUser()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <main className="main">
                <Router>
                    <header>
                        <Navbar />
                    </header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/thorts" element={<Thorts />} />
                        <Route path="/signin" element={<SignIn fetchUser={fetchUser} />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </Router>
            </main>
        </ThemeProvider>
    )


}
export default App
