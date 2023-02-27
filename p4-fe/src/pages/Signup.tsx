import * as React from 'react'
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config'


import { SignStyles } from './SignStyles'

function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    })

    const [errorData, setErrorData] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    })

    async function handleSignup(e: React.SyntheticEvent) {
        e.preventDefault()
        let isValid = true
        if (Object.values(formData).some((val) => !val)) {
            isValid = false
        }

        if (!isValid) {
            alert("Please fill all the fields!")
            return
        }

        try {
            await axios.post(`${baseUrl}/signup`, formData)
            navigate('/signin')
        } catch (error: any) {
            setErrorData(error.response.data.errors)
        }
    }

    function handleChange(e: any) {
        const newFormData = structuredClone(formData)
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)

        const newErrorData = structuredClone(errorData)
        newErrorData[e.target.name] = ''
        setErrorData(newErrorData)
    }


    return (
        <Container maxWidth="xs">
            <Box sx={{ ...SignStyles.mainbox }}>
                <Avatar sx={{ ...SignStyles.avatar }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography sx={{...SignStyles.title}}>
                    SIGN UP
                </Typography>
                <Box component="form" noValidate onSubmit={handleSignup} sx={{ m: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="first_name"
                                autoFocus
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                name="last_name"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
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
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{...SignStyles.btn }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item mb={2}>
                            <Link href="/signin" variant="body2" fontFamily='Raleway'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Signup