import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes } from "react-router-dom"

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={ <Cuisine/>} /> { /* //@ :type is just a random named slug- to fulfill the fill link needed */}
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe/>} />
    </Routes>
  )
}

export default Pages