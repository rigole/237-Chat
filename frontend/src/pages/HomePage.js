import React from 'react'
import { Box } from '@mui/material'
import SideBar from "../components/SideBar"
import Welcome from "../components/Welcome";
import { Routes, Route } from "react-router-dom"
import ChatScreen from "../components/ChatScreen";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Welcome/>}/>
            <Route path="/:id/:name" element={<ChatScreen/>}/>
        </Routes>
    )
}

const  HomePage = ({setloggedIn}) =>{
    return (
        <Box
        display="flex"
        >
            <SideBar setloggedIn={setloggedIn} />
            <AllRoutes/>
        </Box>
    )
}

export default HomePage