import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Route, Routes } from "react-router-dom"

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={ <Cuisine/>} /> { /* //@ :type is just a random named slug- to fulfill the fill link needed */}
      </Routes>
  )
}

export default Pages