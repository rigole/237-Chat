import React from 'react'
import MessageCard from "./MessageCard"

import { Box, AppBar, Toolbar, Typography,Avatar, TextField } from "@mui/material"
import {useParams} from "react-router-dom";
import { useQuery } from "@apollo/client"
import { GET_MSG } from "../graphQL/queries"


const ChatScreen = () => {
    const {id, name} = useParams()
    const {data, loading, error} = useQuery(GET_MSG, {
        variables: {
            receiverId: +id
        }

    })
    console.log(data)
    return (

        <Box
            flexGrow={1}
        >
            <AppBar position="static"
            sx={{backgroundColor:"white", boxShadow:0}}>
                <Toolbar>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
                        sx={{width:"32px", height:"32px", mr:2}}
                    />
                    <Typography variant="h6" color="black">{name}</Typography>
                </Toolbar>
            </AppBar>
            <Box backgroundColor="#f5f5f5" height="80vh" padding="10px" sx={{overflowY:"auto"}}>
                {
                    loading ? <Typography variant="h6">loading chats</Typography>
                        : data.messagesByUser.map(msg => {
                            return <MessageCard key={msg.createdAt} text={msg.text} date={msg.createdAt} direction={msg.receiverId  == +id ? "end" : "start"}/>
                        })
                }

            </Box>
            <TextField
                placeholder="Enter a message"
                variant="standard"
                fullWidth
                multiline
                rows={2}
            />

        </Box>
    )
}

export default ChatScreen