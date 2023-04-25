import React from 'react'
import Main from '../components/Home/Main'
import { Outlet } from 'react-router-dom'
import NavBar from '../screens/NavBar'

const MainHeader = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default MainHeader