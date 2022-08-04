import React, {useState, useRef} from 'react'
import { useMutation } from '@apollo/client'
import { Box, Stack, Typography, Button, TextField, Card, CircularProgress, Alert } from '@mui/material'
import { SIGNUP_USER, SIGNIN_USER } from "../graphQL/mutations"

const AuthScreen = () => {
    const [formData, setFormData] = useState({})
    const [showLogin, setShowLogin] = useState(true)
    const authForm = useRef(null)
    const [signupUser, {data: signupData, loading:l1, error:e1}] = useMutation(SIGNUP_USER)
    const [signinUser, {data:signinData, loading:l2, error:e2}] = useMutation(SIGNIN_USER, {
        onCompleted(data){
            console.log(data)
            localStorage.setItem("jwt", data.signinUser.token)
        }
    })

    if(signinData){

    }

    if(l1 || l2){
        return(
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            >
                <Box textAlign="center">
                    <CircularProgress/>
                    <Typography variant="h6">Authenticating...</Typography>
                </Box>
            </Box>

        )
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(formData)
        if (showLogin) {
            signinUser({
                variables:{
                    userSignin:formData
                }
            })
        } else {
            signupUser({
                variables:{
                    userNew:formData
                }
            })
        }

    }

    return (

        <Box
            ref={authForm}
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
                    {signupData && <Alert severity="success">{signupData.signupUser.firstName} Subscribed </Alert>}
                    {e1 && <Alert severity="error">{e1.message}</Alert>}
                    {e2 && <Alert severity="error">{e2.message}</Alert>}
                    <Typography variant="h5">Please {showLogin ? "Sign In" : "Sign Up"} </Typography>
                    {
                        !showLogin &&
                        <>

                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="standard"
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                name="lastName"
                                label="Last Name"
                                variant="standard"
                                onChange={handleChange}
                                required
                            />

                        </>
                    }

                    <TextField
                        type="email"
                        name="email"
                        label="email"
                        variant="standard"
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="password"
                        name="password"
                        label="password"
                        variant="standard"
                        onChange={handleChange}
                        required
                    />
                    <Typography varaint="subtitle1" onClick={()=> {
                        setShowLogin((preValue) => !preValue)
                        setFormData({})
                        authForm.current.reset()
                    }}> {showLogin? "Sign Up?" : "Sign In?"} </Typography>
                    <Button variant="outlined" type="submit">{showLogin ? "Sign In" : "Sign Up"}</Button>
                </Stack>
            </Card>
        </Box>
    )
}

export default AuthScreen