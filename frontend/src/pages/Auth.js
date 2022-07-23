import React, {useState} from 'react'
import { Box, Stack, Typography, Button, TextField, Card } from '@mui/material'

const AuthScreen = () => {
    const [formData, setFormData] = useState({})
    const [showLogin, setShowLogin] = useState(true)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80vh"
        >
            <Card
                variant="outlined"
                sx={{padding:"10px"}}
            >
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{width:"400px"}}
                >
                    <Typography variant="h5">Please {showLogin ? "Sign In" : "Sign Up"} </Typography>
                    {
                        !showLogin &&
                        <>

                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                name="lastName"
                                label="Last Name"
                                variant="standard"
                                onChange={handleChange}
                            />

                        </>
                    }

                    <TextField
                        type="email"
                        name="email"
                        label="email"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        type="password"
                        name="password"
                        label="password"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <Button variant="outlined" type="submit">{showLogin ? "Sign In" : "Sign Up"}</Button>
                </Stack>
            </Card>
        </Box>
    )
}

export default AuthScreen