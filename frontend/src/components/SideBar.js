import React from 'react'
import { Box, Typography, Divider } from "@mui/material"
import UserCard from "./UserCard"
const SideBar = () => {


    const users = [
        {id:1, firstName:"Marie-Claire", lastName:"KEMENI"},
        {id:2, firstName:"Michel", lastName:"FOLEU"},
        {id:3, firstName:"Placide", lastName:"FOLEU"}
    ]

    return (
        <Box
        backgroundColor="#f7f7f7"
        height="100vh"
        minWidth="250px"
        padding="10px"
        >
            <Typography variant="h6">Chat</Typography>
            <Divider/>
            {
                users.map(item=>{
                    return <UserCard key={item.id} item={item} />
                })
            }
        </Box>
    )
}

export default SideBar