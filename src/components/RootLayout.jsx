import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from "./Navber"

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    </>
  )
}

export default RootLayout