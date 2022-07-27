import React from 'react'
import { Box } from '@mui/material'
import SideBar from "../components/SideBar"
import Welcome from "../components/Welcome";
import { Routes, Route } from "react-router-dom"


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Welcome/>}/>
            <Route path="/:id/:name" element={<Welcome/>}/>
        </Routes>
    )
}

const  HomePage =  () =>{
    return (
        <Box>
            <SideBar/>
            <AllRoutes/>
        </Box>
    )
}

export default HomePage