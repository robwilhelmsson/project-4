
import * as React from 'react'
import { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config'

import { SignStyles } from './SignStyles'



function SignIn({ fetchUser }: { fetchUser: Function }) {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = React.useState('')

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    const refreshPage = () => {
        window.location.reload()
    }

    async function handleSignIn(e: React.SyntheticEvent) {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${baseUrl}/signin`, formData)
            const token = data.token

            if (token) {
                localStorage.setItem('token', token)
                fetchUser()
                navigate('/')
                refreshPage()
            } else {
                alert("Incorrect login details!")
                setErrorMessage("Invalid login details")
            }

        } catch (error: any) {
            console.log(error)
            setErrorMessage(error.response.data.message)
        }
    }

    function handleChange(e: any) {
        const newFormData = structuredClone(formData)
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
        setErrorMessage('')
    }
    return (
        <Container maxWidth="xs">
            <Box sx={{ ...SignStyles.mainbox }}>
                <Avatar sx={{ ...SignStyles.avatar }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography sx={{...SignStyles.title}}>
                    SIGN IN
                </Typography>
                <Box component="form" noValidate onSubmit={handleSignIn} sx={{ m: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ ...SignStyles.btn }}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item mb={2}>
                            <Link href="/signup" variant="body2" fontFamily='Raleway'>
                                No Account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn