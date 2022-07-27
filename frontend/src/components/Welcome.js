import React from 'react'
import {Stack, Typography} from "@mui/material"

const Welcome = () => {

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
        >
            <Typography variant="h2">Welcome to 237-Chat</Typography>
        </Stack>
    )
}

export default Welcome