import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom" //useParams allow to pull out keyword from the URL
import {useState, useEffect} from "react"

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams()

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results)
    console.log(cuisine.type)
  }

  useEffect(() => {
    console.log(params.type)
    // getCuisine()
  }, [params])

  return (
    <div>

    </div>
  )
}

export default Cuisine