import React from 'react'

import { Box, AppBar, Toolbar, Typography,Avatar } from "@mui/material"
import {useParams} from "react-router-dom";

const ChatScreen = () => {
    const {id, name} = useParams()




    return (

        <Box
        flexGrow={1}
        >
            <AppBar position="static"
            sx={{backgroundColor:"white", boxShadow:0}}>
                <Toolbar>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
                        sx={{width:"32px", height:"32px"}}
                    />
                    <Typography variant="h6" color="black">{name}</Typography>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default ChatScreen