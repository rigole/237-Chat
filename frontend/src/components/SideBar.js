import React from 'react'
import { Box, Typography, Divider } from "@mui/material"
import UserCard from "./UserCard"
const SideBar = () => {


    const users = [
        {id:1, firstName:"Marie-Claire", lastName:"Kemeni"},
        {id:2, firstName:"Michel", lastName:"Foleu"},
        {id:3, firstName:"Placide", lastName:"Foleu"}
    ]

    return (
        <Box>
            <Typography variant="h6">Chat</Typography>
            <Divider/>
            {
                users.map(item=>{
                    return <UserCard item={item} />
                })
            }
        </Box>
    )
}

export default SideBar